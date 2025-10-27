# Reference Extraction Guide for 2D Profile Designer

This guide tells you which URLs to visit and what code to copy for building the 2D profile drawer.

## Priority 1: Core Drawing Functionality

### 1. MicroSea Drawing Canvas Library
**URL to visit:**
```
https://shop.datus.tech/_content/MicroSea.Drawing.Canvas/scripts/microsea-drawing-canvas.js
```

**What to copy:**
- The ENTIRE JavaScript file
- Save it as: `references/microsea-drawing-canvas.js`

**What to look for in this file:**
- Canvas initialization code
- Drawing primitives (lines, arcs, circles)
- Mouse/touch event handling
- Coordinate system management
- Zoom/pan functionality

---

### 2. MicroSea Drawing Canvas CSS
**URL to visit:**
```
https://shop.datus.tech/_content/MicroSea.Drawing.Canvas/css/microsea-drawing-canvas.min.css
```

**What to copy:**
- The entire CSS file
- Save it as: `references/microsea-drawing-canvas.css`

**What to look for:**
- Canvas container styling
- Drawing tool UI elements
- Cursor styles for different drawing modes

---

## Priority 2: 3D Visualization (for preview)

### 3. Three.js Library
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor/three-js/three-137.0.js
```

**What to copy:**
- The entire Three.js library
- Save it as: `references/three-137.0.js`

**Note:** This is a standard Three.js library v137. You can alternatively use the official Three.js from CDN.

---

### 4. Three.js Orbit Controls
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor/three-js/three-orbitcontrols.js
```

**What to copy:**
- The entire orbit controls file
- Save it as: `references/three-orbitcontrols.js`

**What to look for:**
- Camera control implementation
- Mouse interaction for 3D view rotation

---

## Priority 3: Editor Functionality

### 5. Bendex Editor Scripts
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor.Editor/scripts/bendex-ui-razor-editor.js
```

**What to copy:**
- The entire JavaScript file
- Save it as: `references/bendex-ui-razor-editor.js`

**What to look for:**
- Profile creation logic
- Bend line calculations
- Dimension handling
- Export functionality (DXF, etc.)
- Part validation

---

### 6. Bendex Editor CSS
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor.Editor/css/bendex-ui-razor-editor.min.css
```

**What to copy:**
- The entire CSS file
- Save it as: `references/bendex-ui-razor-editor.css`

---

## Priority 4: UI Components

### 7. Bendex UI Core Scripts
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor/scripts/bendex-ui-razor.js
```

**What to copy:**
- The entire JavaScript file
- Save it as: `references/bendex-ui-razor.js`

**What to look for:**
- UI component initialization
- Event handling
- Modal/dialog management
- Form controls

---

### 8. Bendex UI CSS
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor/css/bendex-ui-razor.min.css
```

**What to copy:**
- The entire CSS file
- Save it as: `references/bendex-ui-razor.css`

---

### 9. Bendex Theme CSS
**URL to visit:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor/css/themes/bendex/bendex-theme.min.css
```

**What to copy:**
- The entire CSS file
- Save it as: `references/bendex-theme.css`

---

## Priority 5: Utility Scripts

### 10. MicroSea Utils JsInterop
**URL to visit:**
```
https://shop.datus.tech/_content/MicroSea.Utils.JsInterop/scripts/microsea-utils-jsinterop.js
```

**What to copy:**
- The entire JavaScript file
- Save it as: `references/microsea-utils-jsinterop.js`

**What to look for:**
- Helper utilities
- DOM manipulation helpers
- Event utilities
- Data conversion functions

---

## Optional: Advanced Features

### 11. DevExpress Grid (for part lists)
**URL to visit:**
```
https://shop.datus.tech/_content/DevExpress.Blazor/modules/dx-grid-033dcb6b.js
```

**What to copy:**
- Only if you need advanced grid functionality
- Save it as: `references/dx-grid.js`

---

## How to Extract the References

### Step 1: Create the references folder
```
mkdir references
```

### Step 2: Visit each URL in your browser
- Right-click on the page
- Select "View Page Source" or "Save As"
- Copy the entire content
- Paste into the corresponding file name in the `references/` folder

### Step 3: For .min files
Some URLs point to minified files. To get readable code:
- Remove `.min` from the URL (if available)
- Example: Change `microsea-drawing-canvas.min.css` to `microsea-drawing-canvas.css`

### Step 4: Let me know when done
Once you've extracted these files, paste them one at a time in our conversation, and I'll:
1. Analyze the code
2. Extract the relevant parts
3. Build your custom 2D profile designer based on these implementations

---

## Start Here - Most Important Files (Do These First)

1. **microsea-drawing-canvas.js** - Core drawing engine
2. **bendex-ui-razor-editor.js** - Editor logic for sheet metal
3. **three-137.0.js** - 3D visualization

Get these three first, and we can start building!
