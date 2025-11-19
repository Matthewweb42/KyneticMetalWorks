# 2D Profile Designer

Professional 2D CAD tool for sheet metal profile design, built with vanilla JavaScript and HTML5 Canvas.

## 🚀 Features

### Current Features (v0.3 - Select Mode with Hem Buttons)
- ✅ **Select Tool** - Default mode with hem buttons at all open endpoints
  - Clickable +/- buttons appear at open endpoints on the canvas
  - Click + to add a hem, click - to remove hem
  - No need to switch tools - always visible in select mode!
- ✅ **Chain Mode Line Tool** - Click to create connected lines, each endpoint becomes the next startpoint
- ✅ **Curved Hem Display** - Hems now show as curved fold backs (180° with 5mm fixed length)
  - Visual: Smooth curved line with circle at endpoint
- ✅ **Grid System** - Major and minor grid lines with customizable spacing
- ✅ **Snap to Grid** - Precise point placement
- ✅ **Pan & Zoom** - Navigate large drawings easily
  - Pan: Middle mouse or Ctrl+Left mouse drag
  - Zoom: Mouse wheel or +/- keys
- ✅ **Undo/Redo** - Full history support (Ctrl+Z / Ctrl+Y)
- ✅ **Save/Load** - JSON format for profile storage
- ✅ **Material Properties** - Thickness, K-factor, bend radius
- ✅ **Professional UI** - Tool palette, properties panel, status bar
- ✅ **DPI Scaling** - Sharp rendering on retina displays
- ✅ **Open-ended Profiles Only** - No auto-closing, profiles are always open

### Coming Soon
- 🔄 Selection and deletion of segments
- 🔄 DXF Export
- 🔄 SVG Export
- 🔄 Flat Pattern Calculation

---

## 📁 Project Structure

```
2D_Profile_Designer2.0/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles
├── js/
│   ├── main.js            # Entry point & UI setup
│   ├── Editor.js          # Main editor controller
│   ├── core/
│   │   ├── Point.js       # 2D point class
│   │   ├── Segment.js     # Line & Arc segments
│   │   └── Profile.js     # Profile data structure
│   ├── canvas/
│   │   └── CanvasManager.js  # Canvas rendering & transforms
│   └── tools/
│       ├── Tool.js        # Base tool class
│       └── LineTool.js    # Line drawing tool
└── references/            # Original source code references
    ├── microsea-drawing-canvas.js
    └── ANALYSIS_*.md      # Code analysis documents
```

---

## 🎮 Usage

### Getting Started

1. **Open the Application**
   - Simply open `index.html` in a modern web browser
   - No build process or server required!

2. **Adding Hems (Select Mode)**
   - The app starts in Select mode (press `V` to switch back)
   - After drawing lines, you'll see +/- buttons at open endpoints
   - Click the + button to add a hem
   - Click the - button to remove a hem
   - Hems show as curved fold backs with circle endpoints

3. **Drawing Lines (Chain Mode)**
   - Click the "Line" tool in the left palette (or press `L`)
   - Click once to set the start point
   - Move mouse to see live preview
   - Click again to add the next point - the line continues from this point!
   - Keep clicking to add more connected line segments
   - Press `ESC` to finish the chain (does NOT close back to start)
   - Switch back to Select mode (press `V`) to add hems

4. **Navigation**
   - **Pan**: Middle mouse drag OR Ctrl + Left mouse drag
   - **Zoom In**: Mouse wheel up OR `+` key
   - **Zoom Out**: Mouse wheel down OR `-` key
   - **Fit to View**: Press `F`

5. **Grid Controls**
   - **Toggle Grid**: Press `G`
   - **Toggle Snap**: Press `Shift+G`
   - Adjust spacing in the Properties panel (right side)

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `V` | Activate Select Tool (shows hem buttons) |
| `L` | Activate Line Tool |
| `H` | Activate Hem Tool (manual mode) |
| `G` | Toggle Grid |
| `Shift+G` | Toggle Snap |
| `F` | Fit to View |
| `+` / `=` | Zoom In |
| `-` / `_` | Zoom Out |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+S` | Save Profile |
| `Delete` | Delete Selected |
| `ESC` | Finish Line Chain |

### Saving & Loading

**Save Profile:**
- Click "Save" button OR press `Ctrl+S`
- Saves as JSON file

**Load Profile:**
- Click "Open" button
- Select a previously saved JSON file

---

## 🏗️ Architecture

### Design Patterns

The application follows patterns learned from analyzing the Bendex reference code:

1. **Canvas Management** (from `microsea-drawing-canvas.js`)
   - DPI-aware rendering for retina displays
   - Transform-based coordinate system
   - Event handling with debouncing

2. **Tool Pattern**
   - Base `Tool` class
   - Each tool implements: `onClick`, `onMouseMove`, `draw`, etc.
   - Tools are stateful and can draw overlays

3. **History Pattern**
   - JSON serialization for undo/redo
   - Configurable history size
   - State snapshots

### Core Classes

#### Point
```javascript
const point = new Point(10, 20);
const distance = point.distanceTo(otherPoint);
const angle = point.angleTo(otherPoint);
```

#### LineSegment
```javascript
const line = new LineSegment(startPoint, endPoint);
const length = line.getLength();
const midpoint = line.getPointAt(0.5);
```

#### Profile
```javascript
const profile = new Profile();
profile.addSegment(lineSegment);
profile.material.thickness = 1.5;  // mm
const bounds = profile.getBounds();
```

#### CanvasManager
```javascript
const canvas = new CanvasManager(container);
canvas.pan(dx, dy);
canvas.zoom(delta, centerPoint);
const worldPoint = canvas.screenToWorld(screenPoint);
```

---

## 🔧 Extending the Application

### Adding a New Tool

1. Create a new file in `js/tools/`:

```javascript
// js/tools/MyTool.js
import { Tool } from './Tool.js';

export class MyTool extends Tool {
    constructor(editor) {
        super('mytool', editor);
    }

    onClick(point, event) {
        // Handle click
    }

    draw(ctx, transform) {
        // Draw preview/overlay
    }
}
```

2. Register the tool in `Editor.js`:

```javascript
import { MyTool } from './tools/MyTool.js';

initializeTools() {
    this.tools.line = new LineTool(this);
    this.tools.mytool = new MyTool(this);  // Add this
}
```

3. Add UI button in `index.html`:

```html
<button class="tool-btn" data-tool="mytool" title="My Tool (M)">
    <span class="tool-icon">🔧</span>
    <span class="tool-label">My Tool</span>
</button>
```

### Adding a New Segment Type

1. Extend `Segment` in `Segment.js`:

```javascript
export class MySegment extends Segment {
    constructor(params) {
        super('mysegment');
        // Your properties
    }

    getStart() { /* ... */ }
    getEnd() { /* ... */ }
    getBounds() { /* ... */ }
    draw(ctx, transform) { /* ... */ }
    toJSON() { /* ... */ }
    static fromJSON(json) { /* ... */ }
}
```

2. Update `Profile.fromJSON()` to handle the new type

---

## 🎨 Customization

### Changing Colors

Edit `styles/main.css`:

```css
:root {
    --primary-color: #27486D;  /* Change this */
    --canvas-bg: #fafafa;
    --grid-major: #d0d0d0;
    --grid-minor: #e8e8e8;
}
```

### Grid Settings

Edit in Properties panel or via JavaScript:

```javascript
editor.canvasManager.gridSpacing = 10;       // mm
editor.canvasManager.gridSubdivisions = 5;
```

### Material Defaults

Edit in `Profile.js` constructor:

```javascript
this.material = {
    thickness: 1.5,     // mm
    kFactor: 0.44,
    bendRadius: 3       // mm
};
```

---

## 🧮 Sheet Metal Calculations

### Bend Allowance

Formula implemented in `Profile.js`:

```
BA = (π/180) × Angle × (Radius + K-factor × Thickness)
```

Usage:
```javascript
const bendAngle = 90;  // degrees
const ba = profile.calculateBendAllowance(bendAngle);
```

### Bend Deduction

```
BD = 2 × (Radius + Thickness) × tan(Angle/2) - BA
```

Usage:
```javascript
const bd = profile.calculateBendDeduction(bendAngle);
```

---

## 📊 File Format

Profiles are saved as JSON:

```json
{
  "segments": [
    {
      "type": "line",
      "id": "seg_12345_abc",
      "start": { "x": 0, "y": 0 },
      "end": { "x": 100, "y": 0 }
    }
  ],
  "material": {
    "thickness": 1.5,
    "kFactor": 0.44,
    "bendRadius": 3
  },
  "metadata": {
    "name": "My Profile",
    "createdDate": "2025-01-15T10:30:00Z",
    "modifiedDate": "2025-01-15T11:00:00Z",
    "units": "mm"
  }
}
```

---

## 🐛 Troubleshooting

### Canvas Not Showing
- Check browser console for errors
- Ensure JavaScript modules are enabled
- Try opening in Chrome/Firefox/Edge (latest versions)

### Slow Performance
- Reduce grid subdivisions
- Close other tabs
- Check if hardware acceleration is enabled in browser

### DPI Issues
- The app automatically handles DPI scaling
- If text looks blurry, check `window.devicePixelRatio` in console

---

## 🚀 Next Steps

Want to contribute? Here's what to build next:

### Priority 1: Arc Tool
- 3-point arc mode
- Center + radius mode
- Tangent arc mode

### Priority 2: Selection Tool
- Click to select segments
- Drag to move
- Rotate & scale handles
- Multi-select (Shift+Click)

### Priority 3: DXF Export
- Use a library like `dxf-writer`
- Convert segments to DXF entities
- Handle layers, colors, line types

### Priority 4: Dimension Tool
- Linear dimensions
- Angular dimensions
- Radius/diameter dimensions
- Auto-update on geometry change

---

## 📚 References

This project is based on analysis of the **Bendex** sheet metal software:
- `microsea-drawing-canvas.js` - Canvas rendering system
- `bendex-ui-razor.js` - UI component patterns

See `references/ANALYSIS_*.md` for detailed breakdowns.

---

## 📄 License

This is a custom tool for Kynetic Metal Works. Not for redistribution.

---

## 🙋 Support

For questions or issues, contact the development team.

---

## 🎉 Credits

Built with love for sheet metal fabrication! ⚙️✨
