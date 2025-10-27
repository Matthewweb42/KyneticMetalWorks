# Development Guide

This guide helps you extend and enhance the 2D Profile Designer.

---

## 🏗️ Project Architecture

### Core Concepts

1. **Separation of Concerns**
   - `core/` - Data structures (Profile, Segment, Point)
   - `canvas/` - Rendering and transforms
   - `tools/` - User interaction tools
   - `main.js` - UI wiring and app bootstrap

2. **Coordinate Systems**
   - **World Space**: The actual drawing coordinates (mm)
   - **Screen Space**: Canvas pixel coordinates
   - Conversion: `CanvasManager.screenToWorld()` / `worldToScreen()`

3. **Transform Pattern**
   ```javascript
   const transform = canvasManager.getTransform();
   // transform has: scale, offset, worldToScreen(), screenToWorld()
   segment.draw(ctx, transform);
   ```

---

## 🔨 Adding Features

### Adding a New Tool

#### Step 1: Create the Tool Class

Create `js/tools/ArcTool.js`:

```javascript
import { Tool } from './Tool.js';
import { ArcSegment } from '../core/Segment.js';
import { Point } from '../core/Point.js';

export class ArcTool extends Tool {
    constructor(editor) {
        super('arc', editor);
        this.points = []; // Will collect 3 points
    }

    onActivate() {
        this.points = [];
        this.editor.statusBar.setText('Arc tool: Click first point');
    }

    onClick(point, event) {
        const worldPoint = this.editor.canvasManager.screenToWorld(point);
        const snappedPoint = this.editor.canvasManager.snapToGrid(worldPoint);

        this.points.push(snappedPoint);

        if (this.points.length === 1) {
            this.editor.statusBar.setText('Arc tool: Click second point');
        } else if (this.points.length === 2) {
            this.editor.statusBar.setText('Arc tool: Click third point');
        } else if (this.points.length === 3) {
            // Calculate arc from 3 points
            const arc = this.createArcFrom3Points(
                this.points[0],
                this.points[1],
                this.points[2]
            );

            if (arc) {
                this.editor.profile.addSegment(arc);
                this.editor.addToHistory();
            }

            // Reset
            this.points = [];
            this.editor.statusBar.setText('Arc tool: Click first point');
        }

        this.editor.render();
    }

    onMouseMove(point, event) {
        if (this.points.length > 0) {
            const worldPoint = this.editor.canvasManager.screenToWorld(point);
            this.currentPoint = this.editor.canvasManager.snapToGrid(worldPoint);
            this.editor.render();
        }
    }

    draw(ctx, transform) {
        // Draw preview points
        this.points.forEach(pt => {
            const screen = transform.worldToScreen(pt);
            ctx.beginPath();
            ctx.arc(screen.x, screen.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#0066cc';
            ctx.fill();
        });

        // Draw preview arc if we have 2+ points
        if (this.points.length >= 2 && this.currentPoint) {
            // Draw preview curve through points
            // (Simplified - just draw lines for now)
            ctx.strokeStyle = '#0066cc';
            ctx.setLineDash([5, 5]);
            // ... draw preview
        }
    }

    createArcFrom3Points(p1, p2, p3) {
        // Calculate arc center and radius from 3 points
        // This is the tricky math part!

        // Vector from p1 to p2
        const d12x = p2.x - p1.x;
        const d12y = p2.y - p1.y;

        // Vector from p2 to p3
        const d23x = p3.x - p2.x;
        const d23y = p3.y - p2.y;

        // Midpoints
        const mid12 = new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        const mid23 = new Point((p2.x + p3.x) / 2, (p2.y + p3.y) / 2);

        // Perpendicular slopes
        const slope12 = d12y / d12x;
        const slope23 = d23y / d23x;

        if (Math.abs(slope12 - slope23) < 0.001) {
            // Points are collinear, can't make an arc
            return null;
        }

        // Calculate center (intersection of perpendicular bisectors)
        const perpSlope12 = -1 / slope12;
        const perpSlope23 = -1 / slope23;

        const centerX = (perpSlope12 * mid12.x - perpSlope23 * mid23.x + mid23.y - mid12.y) /
                       (perpSlope12 - perpSlope23);
        const centerY = perpSlope12 * (centerX - mid12.x) + mid12.y;

        const center = new Point(centerX, centerY);
        const radius = center.distanceTo(p1);

        // Calculate angles
        const startAngle = Math.atan2(p1.y - center.y, p1.x - center.x);
        const endAngle = Math.atan2(p3.y - center.y, p3.x - center.x);

        return new ArcSegment(center, radius, startAngle, endAngle);
    }
}
```

#### Step 2: Register in Editor

Edit `js/Editor.js`:

```javascript
import { ArcTool } from './tools/ArcTool.js';

initializeTools() {
    this.tools.line = new LineTool(this);
    this.tools.arc = new ArcTool(this);  // Add this
}
```

#### Step 3: Add UI Button

Edit `index.html`:

```html
<button id="tool-arc" class="tool-btn" data-tool="arc" title="Arc Tool (A)">
    <span class="tool-icon">⌒</span>
    <span class="tool-label">Arc</span>
</button>
```

#### Step 4: Add Keyboard Shortcut

Edit `js/Editor.js` in `onKeyDown`:

```javascript
case 'a':
    this.setTool('arc');
    break;
```

---

### Adding a New Segment Type

Let's add a **Bezier Curve** segment:

#### Step 1: Define the Class

Add to `js/core/Segment.js`:

```javascript
export class BezierSegment extends Segment {
    constructor(start, control1, control2, end) {
        super('bezier');
        this.start = start;
        this.control1 = control1;
        this.control2 = control2;
        this.end = end;
    }

    getStart() {
        return this.start;
    }

    getEnd() {
        return this.end;
    }

    getBounds() {
        // Simplified - should calculate curve bounds properly
        return {
            minX: Math.min(this.start.x, this.control1.x, this.control2.x, this.end.x),
            minY: Math.min(this.start.y, this.control1.y, this.control2.y, this.end.y),
            maxX: Math.max(this.start.x, this.control1.x, this.control2.x, this.end.x),
            maxY: Math.max(this.start.y, this.control1.y, this.control2.y, this.end.y)
        };
    }

    getLength() {
        // Approximate length by subdividing curve
        let length = 0;
        const steps = 20;
        let prevPoint = this.getPointAt(0);

        for (let i = 1; i <= steps; i++) {
            const t = i / steps;
            const point = this.getPointAt(t);
            length += prevPoint.distanceTo(point);
            prevPoint = point;
        }

        return length;
    }

    getPointAt(t) {
        // Cubic Bezier formula
        const mt = 1 - t;
        const mt2 = mt * mt;
        const mt3 = mt2 * mt;
        const t2 = t * t;
        const t3 = t2 * t;

        return new Point(
            mt3 * this.start.x +
            3 * mt2 * t * this.control1.x +
            3 * mt * t2 * this.control2.x +
            t3 * this.end.x,

            mt3 * this.start.y +
            3 * mt2 * t * this.control1.y +
            3 * mt * t2 * this.control2.y +
            t3 * this.end.y
        );
    }

    containsPoint(point, tolerance = 5) {
        // Check if point is near curve
        // Sample points along curve and check distances
        for (let t = 0; t <= 1; t += 0.05) {
            const curvePoint = this.getPointAt(t);
            if (curvePoint.distanceTo(point) < tolerance / 100) {
                return true;
            }
        }
        return false;
    }

    draw(ctx, transform) {
        const start = transform.worldToScreen(this.start);
        const cp1 = transform.worldToScreen(this.control1);
        const cp2 = transform.worldToScreen(this.control2);
        const end = transform.worldToScreen(this.end);

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);

        ctx.strokeStyle = this.selected ? '#0066cc' : '#000000';
        ctx.lineWidth = this.selected ? 3 : 2;
        ctx.stroke();

        // Draw control points when selected
        if (this.selected) {
            // Draw control handles
            ctx.setLineDash([2, 2]);
            ctx.strokeStyle = '#999999';
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(cp1.x, cp1.y);
            ctx.moveTo(cp2.x, cp2.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw control points
            [cp1, cp2].forEach(pt => {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#ff6600';
                ctx.fill();
            });
        }
    }

    toJSON() {
        return {
            ...super.toJSON(),
            start: this.start.toJSON(),
            control1: this.control1.toJSON(),
            control2: this.control2.toJSON(),
            end: this.end.toJSON()
        };
    }

    static fromJSON(json) {
        return new BezierSegment(
            Point.fromJSON(json.start),
            Point.fromJSON(json.control1),
            Point.fromJSON(json.control2),
            Point.fromJSON(json.end)
        );
    }
}
```

#### Step 2: Update Profile Loader

Edit `js/core/Profile.js` in `fromJSON()`:

```javascript
profile.segments = json.segments.map(segData => {
    switch (segData.type) {
        case 'line':
            return LineSegment.fromJSON(segData);
        case 'arc':
            return ArcSegment.fromJSON(segData);
        case 'bezier':  // Add this
            return BezierSegment.fromJSON(segData);
        default:
            console.warn(`Unknown segment type: ${segData.type}`);
            return null;
    }
}).filter(seg => seg !== null);
```

---

### Adding Export Formats

#### DXF Export

1. Install a DXF library (or write your own):
   ```javascript
   // Using dxf-writer library
   import DxfWriter from './lib/dxf-writer.js';
   ```

2. Create export function:

```javascript
// In Editor.js or new Exporter.js
exportDXF() {
    const dxf = new DxfWriter();

    // Set units
    dxf.setUnits('Millimeters');

    // Add layer
    dxf.addLayer('PROFILE', DxfWriter.ACI.RED, 'CONTINUOUS');

    // Export segments
    this.profile.segments.forEach(segment => {
        if (segment.type === 'line') {
            dxf.drawLine(
                segment.start.x, segment.start.y,
                segment.end.x, segment.end.y,
                'PROFILE'
            );
        } else if (segment.type === 'arc') {
            dxf.drawArc(
                segment.center.x, segment.center.y,
                segment.radius,
                segment.startAngle * 180 / Math.PI,
                segment.endAngle * 180 / Math.PI,
                'PROFILE'
            );
        }
    });

    // Download
    const dxfString = dxf.toDxfString();
    const blob = new Blob([dxfString], { type: 'application/dxf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.profile.metadata.name}.dxf`;
    a.click();

    URL.revokeObjectURL(url);
}
```

#### SVG Export

SVG is easier - it's just XML:

```javascript
exportSVG() {
    const bounds = this.profile.getBounds();
    const padding = 10;
    const width = bounds.maxX - bounds.minX + padding * 2;
    const height = bounds.maxY - bounds.minY + padding * 2;

    let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="${width}mm" height="${height}mm"
     viewBox="${bounds.minX - padding} ${bounds.minY - padding} ${width} ${height}">
    <g stroke="black" fill="none" stroke-width="0.5">
`;

    // Add segments
    this.profile.segments.forEach(segment => {
        if (segment.type === 'line') {
            svg += `        <line x1="${segment.start.x}" y1="${segment.start.y}" ` +
                   `x2="${segment.end.x}" y2="${segment.end.y}" />\n`;
        } else if (segment.type === 'arc') {
            // SVG arcs are complex - need to calculate path
            const start = segment.getStart();
            const end = segment.getEnd();
            const largeArc = Math.abs(segment.endAngle - segment.startAngle) > Math.PI ? 1 : 0;
            const sweep = segment.counterclockwise ? 0 : 1;

            svg += `        <path d="M ${start.x},${start.y} ` +
                   `A ${segment.radius},${segment.radius} 0 ${largeArc},${sweep} ` +
                   `${end.x},${end.y}" />\n`;
        }
    });

    svg += `    </g>
</svg>`;

    // Download
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.profile.metadata.name}.svg`;
    a.click();

    URL.revokeObjectURL(url);
}
```

---

## 🧪 Testing Patterns

### Manual Testing Checklist

For each new tool:

```markdown
- [ ] Activate tool via button click
- [ ] Activate tool via keyboard shortcut
- [ ] Draw basic shape
- [ ] Draw with snap enabled
- [ ] Draw with snap disabled
- [ ] Cancel operation with ESC
- [ ] Undo the operation (Ctrl+Z)
- [ ] Redo the operation (Ctrl+Y)
- [ ] Save profile with new segment type
- [ ] Load profile and verify segment renders
- [ ] Pan while drawing
- [ ] Zoom while drawing
- [ ] Switch to another tool mid-operation
```

### Performance Testing

```javascript
// Add to Editor.js for debugging
renderWithTiming() {
    const start = performance.now();
    this.render();
    const end = performance.now();

    if (end - start > 16) { // More than 1 frame at 60fps
        console.warn(`Slow render: ${(end - start).toFixed(2)}ms`);
    }
}
```

---

## 🎨 UI Best Practices

### Status Bar Updates

Always update the status bar for user feedback:

```javascript
// Good
this.editor.statusBar.setText('Line created: 50.5mm');

// Bad - Silent operation
// (user doesn't know what happened)
```

### Cursor Changes

Match cursor to tool state:

```javascript
getCursor() {
    if (this.isDrawing) {
        return 'crosshair';
    } else if (this.isSelecting) {
        return 'default';
    } else if (this.canResize) {
        return 'nwse-resize';
    }
    return 'default';
}
```

### Visual Feedback

Show what's happening:

```javascript
draw(ctx, transform) {
    // Always show preview when relevant
    if (this.startPoint) {
        // Draw preview line/arc/etc
    }

    // Highlight active points
    if (this.hoverPoint) {
        // Draw hover indicator
    }
}
```

---

## 📚 Resources

### Math References

- [2D Line Intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)
- [Circle from 3 Points](https://en.wikipedia.org/wiki/Circumscribed_circle)
- [Bezier Curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
- [Arc Length](https://en.wikipedia.org/wiki/Arc_length)

### Bend Allowance

- [Sheet Metal Bend Allowance Calculator](https://www.omnicalculator.com/physics/bend-allowance)
- [K-Factor Guide](https://www.thefabricator.com/article/bending/k-factor-mystery)

### Canvas API

- [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Canvas Transforms](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations)

---

## 🐛 Common Issues & Solutions

### Issue: Lines appear jagged on retina displays
**Solution:** Check DPI scaling in CanvasManager
```javascript
this.dpr = window.devicePixelRatio || 1;
this.ctx.scale(this.dpr, this.dpr);
```

### Issue: Snap not working consistently
**Solution:** Ensure snap happens in world space:
```javascript
const worldPoint = this.editor.canvasManager.screenToWorld(point);
const snapped = this.editor.canvasManager.snapToGrid(worldPoint);
```

### Issue: History gets too large
**Solution:** Limit history size (already implemented):
```javascript
if (this.history.length > this.maxHistorySize) {
    this.history.shift();
}
```

---

## 🚀 Next Features Roadmap

### Phase 1 (Essential)
1. Selection Tool
2. Arc Tool
3. Rectangle Tool
4. Move/Delete operations

### Phase 2 (Sheet Metal)
1. Dimension Tool
2. Bend Line Tool
3. Flat Pattern Calculator
4. Bend Allowance Display

### Phase 3 (Export)
1. DXF Export
2. SVG Export
3. PDF Export (with dimensions)
4. Image Export (PNG/JPEG)

### Phase 4 (Advanced)
1. Part Library
2. Templates
3. Constraints (parallel, perpendicular, tangent)
4. Array/Pattern tools
5. Mirror tool

---

## 💡 Pro Tips

1. **Use console.log strategically**
   - Log tool state changes
   - Log transform calculations
   - Remove logs before committing

2. **Test on multiple browsers**
   - Chrome (primary)
   - Firefox (good standards compliance)
   - Edge (webkit compatibility)

3. **Keep segments immutable**
   - Don't modify existing segments
   - Create new ones instead
   - Makes undo/redo simpler

4. **Separate UI from logic**
   - Tools shouldn't know about HTML
   - Editor handles UI ↔ Logic bridge

5. **Profile serialization is your friend**
   - If it serializes, it undoes
   - If it undoes, it works!

---

Happy coding! 🎉
