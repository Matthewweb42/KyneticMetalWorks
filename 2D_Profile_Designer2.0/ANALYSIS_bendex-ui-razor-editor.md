# Analysis: bendex-ui-razor-editor.js

## ⚠️ IMPORTANT FINDING

This file is **VERY SMALL** (only ~60 lines) and contains **ONLY** UI overlay keyboard navigation!

## 🔍 What This File Actually Contains

### EditorOverlayInterop (Lines 14-59)
**Purpose:** Handles Tab key navigation between input fields in editor overlays

**What it does:**
- Intercepts Tab/Shift+Tab keypresses
- Navigates between input fields in forms
- Communicates with C#/Blazor backend

**What it does NOT contain:**
- ❌ Drawing logic
- ❌ Geometry calculations
- ❌ Profile structures
- ❌ Bend calculations
- ❌ DXF export
- ❌ Any sheet metal specific code

---

## 🚨 Problem: The Sheet Metal Logic is NOT Here!

This is just a **tiny UI helper class** for keyboard navigation in forms.

### Where is the Real Editor Code?

The actual sheet metal drawing/editing code must be in **C#/Blazor on the backend**, not JavaScript!

This Blazor application architecture means:
- **JavaScript side:** Just canvas drawing primitives + event handling
- **C# side:** All the business logic (geometry, calculations, profiles)

---

## 🎯 What This Means For Your Project

### Good News:
✅ You have the **complete canvas drawing system** (microsea-drawing-canvas.js)
✅ All the drawing primitives, events, and rendering are there

### Challenge:
❌ The **geometry/profile logic is in C# .NET**, not JavaScript
❌ We won't find it in JavaScript files

---

## 🔄 Alternative Approaches

### Option 1: Reverse Engineer from Scratch (Recommended)
Since the business logic is server-side, you'll need to build your own:

**What you already have:**
- ✅ Canvas setup & rendering (microsea-drawing-canvas.js)
- ✅ Event handling (mouse, touch, keyboard)
- ✅ Drawing primitives (lines, arcs, bezier curves)
- ✅ Grid rendering
- ✅ Text with outlines

**What you need to build:**
1. **Profile Data Structure**
   ```javascript
   {
     points: [{x, y}, ...],
     segments: [{type: 'line', start, end}, {type: 'arc', ...}],
     dimensions: [...],
     bendLines: [...]
   }
   ```

2. **Drawing Tools**
   - Line tool
   - Arc tool
   - Rectangle tool
   - Dimension tool

3. **Geometry Calculations**
   - Line-line intersection
   - Arc center calculation
   - Angle calculations
   - Distance measurements

4. **Sheet Metal Specific**
   - Bend allowance calculations
   - Flat pattern generation
   - K-factor calculations

5. **DXF Export**
   - You'll need a DXF writer library (there are JS libraries for this)

### Option 2: Try to Get More Files
Look for JavaScript files that might have more logic:

**Try these URLs:**
```
https://shop.datus.tech/_content/Bendex.UI.Razor/scripts/bendex-ui-razor.js
```
This might have more UI components and utilities.

**Or inspect the Network tab:**
When you use the editor at `https://shop.datus.tech/editor`, check:
1. Open DevTools (F12)
2. Go to Network tab
3. Use the editor to draw something
4. Look for:
   - WebSocket messages (real-time data)
   - API calls (REST endpoints)
   - Other .js files loading

---

## 📋 Recommendation: Next Steps

### Immediate Action:
Get the **bendex-ui-razor.js** file to see if there's more JavaScript logic:

```
URL: https://shop.datus.tech/_content/Bendex.UI.Razor/scripts/bendex-ui-razor.js
```

### If that's also minimal:
I'll help you build a **complete 2D profile designer from scratch** using:
- The canvas system you already have (microsea-drawing-canvas.js)
- Custom geometry/profile logic
- Sheet metal calculations
- DXF export (using a library like dxf-writer)

---

## 🎨 What I Can Build For You

Based on what we have, I can create:

### 1. **Canvas-Based Profile Editor**
- Mouse/touch drawing
- Line and arc tools
- Point snapping
- Dimension placement
- Grid with measurements

### 2. **Profile Data Management**
- Save/load profiles
- Undo/redo
- Export to JSON
- Import from JSON

### 3. **Sheet Metal Features**
- Bend line placement
- Bend allowance calculation
- Inside/outside radius
- K-factor support
- Flat pattern calculation

### 4. **Export Options**
- DXF export
- SVG export
- PNG/JPEG export (already have this)
- Print-ready layouts

### 5. **UI Components**
- Tool palette
- Properties panel
- Dimension editor
- Material selector

---

## 🚀 Decision Time

**Choice A:** Get bendex-ui-razor.js first
- Might have more JavaScript logic
- Worth checking before building from scratch

**Choice B:** Start building immediately
- Use microsea-drawing-canvas.js as foundation
- I'll create a complete sheet metal profile designer
- Custom built for your needs

**What do you want to do?**

1. Try to get bendex-ui-razor.js first?
2. Start building the profile designer now with what we have?
3. Try to inspect the live website for API calls/data structures?

Let me know and I'll proceed! 🎯
