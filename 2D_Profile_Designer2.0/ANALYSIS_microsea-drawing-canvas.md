# Analysis: microsea-drawing-canvas.js

## 🎯 Overview
This is the **core canvas drawing library** for the Bendex sheet metal software. It provides a complete wrapper around HTML5 Canvas with advanced event handling for both mouse and touch gestures.

---

## 📦 Main Components

### 1. **Canvas2DContextInterop** (Lines 45-221)
**Purpose:** Wrapper for HTML5 Canvas 2D Context drawing operations

**Key Methods We Need:**
```javascript
// Drawing Primitives
- BeginPath()
- MoveTo(x, y)
- LineTo(x, y)
- Arc(x, y, radius, startAngle, endAngle, counterClockwise)
- BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
- Rect(x, y, width, height)
- ClosePath()

// Styling
- SetLineWidth(contextKey, lineWidth)
- SetStrokeStyle(contextKey, strokeStyle)
- SetFillStyle(contextKey, fillStyle)
- SetLineDash(contextKey, segments)  // For dashed lines!
- SetLineJoin(contextKey, lineJoin)
- SetLineCap(contextKey, lineCap)

// Rendering
- Stroke()
- Fill(fillRule)
- FillRect(x, y, width, height)
- ClearRect(x, y, width, height)

// Text
- SetFont(contextKey, font)
- FillText(contextKey, text, x, y)
- FillTextWithOutline(contextKey, text, color, outlineColor, x, y)
- MeasureTextWidth(contextKey, text)

// Transformations
- SetTransform(contextKey, m11, m12, m21, m22, dx, dy)
- Save()
- Restore()

// Utility
- DrawGrid(contextKey, left, top, right, bottom, distX, distY)  // Grid helper!
```

**💡 What This Means For You:**
This handles ALL the actual drawing to canvas. You'll use these methods to draw:
- Lines (straight and curved)
- Rectangles
- Arcs/circles
- Text labels
- Dimensions
- Grids

---

### 2. **ViewCanvasInterop** (Lines 337-419)
**Purpose:** Creates and manages canvas elements in the DOM

**Key Methods:**
```javascript
- CreateCanvas(canvasKey, container, addTabIndex, interopCallback)
  // Creates a canvas, adds to container, sets up event listeners

- ResizeCanvas(canvasKey, container, interopCallback)
  // Handles window resize, maintains DPI scaling

- CalculateCanvasBounds(element, container)
  // Calculates proper canvas size accounting for:
  //   - Device pixel ratio (for retina displays)
  //   - Padding/margins
  //   - Container bounds

- FocusCanvas(canvasKey)
  // Gives canvas keyboard focus

- DeleteCanvas(canvasKey)
  // Cleanup
```

**💡 What This Means For You:**
This sets up your canvas with:
- **Proper DPI scaling** (line 405-409) - Critical for sharp rendering on retina displays!
- **Responsive sizing** - Fits canvas to container
- **Event handling setup**

---

### 3. **ViewCanvasItem** (Lines 520-849)
**Purpose:** **MOST IMPORTANT** - Complete event handling system

**Handles ALL User Input:**

#### Mouse Events:
```javascript
- OnMouseDown(event)  // Start drawing, select objects
- OnMouseMove(event)  // Drag, hover, live preview
- OnMouseUp(event)    // Finish drawing
- OnClick(event)      // Click to place points
- OnWheel(event)      // Zoom with mouse wheel
```

#### Keyboard Events:
```javascript
- OnKeyDown(event)    // Shortcuts (Escape, Delete, etc.)
- OnKeyUp(event)
```

#### Touch/Gesture Events (for tablets/touch screens):
```javascript
- OnGestureClick()
- OnGestureMouseMove()
- OnPressAndTap()        // Right-click equivalent
- OnTwoFingerTap()       // Special gestures
- OnTwoFingerPan()       // Pan the view
- OnRotate()             // Rotate gesture
- OnZoom()               // Pinch-to-zoom
```

**Key Features:**
1. **Debounced mouse move** (line 531) - Throttles mousemove to every 20ms for performance
2. **Prevents default** - Stops context menus, scrolling interference
3. **Touch support** - Uses TouchHelper and GestureHelper for mobile
4. **Event copying** (lines 839-849) - Converts events to serializable objects for Blazor interop

**💡 What This Means For You:**
This is your complete input system. You don't need to write event handlers from scratch!

---

### 4. **OffscreenCanvasInterop** (Lines 300-335)
**Purpose:** Creates hidden canvases for buffering/caching

**Key Methods:**
```javascript
- CreateOffscreenCanvas(canvasKey, width, height)
- GetOffscreenCanvas(canvasKey)
- DeleteOffscreenCanvas(canvasKey)
```

**💡 What This Means For You:**
Use this for:
- **Double buffering** - Draw to offscreen canvas, then copy to visible canvas (prevents flicker)
- **Caching** - Pre-render complex shapes
- **Layer composition** - Draw different parts separately

---

### 5. **CanvasImagePreloadInterop** (Lines 222-299)
**Purpose:** Load and manage images on canvas

**Key Methods:**
```javascript
- SetImageAsync(imageKey, imageData, mimeType)
- LoadImageAsync(imageUrl)
- ToByteArray(imageKey, mimeType)
- CloneImage(imageKey, cloneImageKey)
```

**💡 What This Means For You:**
Use this to:
- Load company logos
- Import reference images
- Export canvas to PNG/JPEG

---

## 🏗️ Architecture Pattern

This library uses a **Key-Store pattern**:

```javascript
// Everything is stored by string keys
ObjectStore.Save("myCanvas", canvasObject);
ObjectStore.Get("myCanvas");  // Retrieve later
```

**Benefits:**
- Works across JavaScript ↔ C#/Blazor boundary
- No memory leaks (can delete by key)
- Multiple canvas instances

---

## 🎨 How They Use It (Sheet Metal Specific)

### Grid Drawing (Line 180-192):
```javascript
DrawGrid(contextKey, left, top, right, bottom, distX, distY)
```
- Draws evenly spaced grid lines
- Used for measurement reference
- **You'll want this for your profile designer!**

### Text with Outline (Lines 194-203):
```javascript
FillTextWithOutline(contextKey, text, color, outlineColor, x, y)
```
- Draws text with contrasting outline
- Ensures dimensions are readable on any background
- **Essential for dimension labels!**

### Transform Support (Line 142):
```javascript
SetTransform(contextKey, m11, m12, m21, m22, dx, dy)
```
- Handles pan/zoom with matrix transformations
- Critical for navigating large drawings

---

## ✅ What You Can Build With This

Using **just this file**, you can:

1. ✅ Create a canvas that fills a container
2. ✅ Handle all mouse/touch input
3. ✅ Draw lines, arcs, rectangles
4. ✅ Add text labels and dimensions
5. ✅ Implement zoom and pan
6. ✅ Draw a measurement grid
7. ✅ Support touch gestures
8. ✅ Export to image

---

## 🚫 What's Missing (You Need From Other Files)

This file does **NOT** include:

1. ❌ **Geometry calculations** (bend angles, arc centers, etc.)
2. ❌ **Profile data structures** (how to represent a sheet metal part)
3. ❌ **DXF export** (CAD file format)
4. ❌ **Bend line algorithms**
5. ❌ **Snapping/constraints**
6. ❌ **Undo/redo**
7. ❌ **Object selection logic**

**These will be in:** `bendex-ui-razor-editor.js` ⬅️ **GET THIS NEXT!**

---

## 🎯 Next Steps

### To Continue, Get:
```
URL: https://shop.datus.tech/_content/Bendex.UI.Razor.Editor/scripts/bendex-ui-razor-editor.js
```

This will have:
- Profile/part data structures
- Bend calculations
- Line/arc editing tools
- Dimension placement
- Possibly DXF export

---

## 💻 Dependencies This File Needs

This file references several `MicroSea.Utils` classes that aren't included:

```javascript
// From MicroSea.Utils (you'll need these too):
- ObjectStore           // Simple key-value store
- EventUtils           // Event helper functions
- TouchHelper          // Touch event processing
- GestureHelper        // Gesture recognition
- TypeCheckUtils       // Type validation
- ConvertionHelper     // Event conversion
- ElementHelper        // DOM helpers
- HtmlWindowInterop    // Window/DPI functions
- DataConverter        // Data URL conversion
```

**Get this file:**
```
URL: https://shop.datus.tech/_content/MicroSea.Utils.JsInterop/scripts/microsea-utils-jsinterop.js
```

---

## 📝 Implementation Notes

### For a Sheet Metal Profile Designer, You'll Need:

1. **ViewCanvasInterop** - Set up the canvas
2. **Canvas2DContextInterop** - Draw everything
3. **ViewCanvasItem** - Handle user input
4. **OffscreenCanvasInterop** - Buffer for smooth rendering

### Typical Usage Flow:
```
1. CreateCanvas() → creates canvas element
2. CreateCanvasContext() → gets 2D context
3. User clicks → OnMouseDown fires
4. Draw with LineTo/Arc/etc
5. Call Stroke() to render
6. Repeat
```

---

## 🔥 Pro Tips

1. **Mouse Move Throttling**: They debounce to 20ms (line 531) - smart for performance!
2. **DPI Handling**: They multiply by devicePixelRatio (line 405) - essential for sharp graphics
3. **Event Prevention**: They block context menus and default behaviors - good UX
4. **Offscreen Buffering**: Use for complex scenes to avoid flicker
5. **Grid Helper**: Built-in DrawGrid function - use it!

---

## Ready for Next File?

Get `bendex-ui-razor-editor.js` and paste it - that's where the real sheet metal magic happens! 🚀
