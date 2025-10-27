# 🚀 Quick Start Guide

## Get Running in 30 Seconds!

### Step 1: Open the App
1. Navigate to the project folder
2. Double-click `index.html`
3. The app opens in your default browser!

**That's it!** No installation, no build process, no server needed.

---

## Your First Drawing (2 minutes)

### 1. Draw a Line
1. The **Line Tool** is already selected (blue highlight)
2. **Click** anywhere on the canvas to set the start point
3. **Move** your mouse - you'll see a preview line following your cursor
4. **Click** again to place the end point

**Pro Tip:** Watch the status bar at the bottom - it shows the line length and angle!

### 2. Draw More Lines
- Just keep clicking!
- Each click starts a new line from the previous endpoint
- Press **ESC** to cancel and start fresh

### 3. Navigate the Canvas
- **Pan**: Hold middle mouse button and drag
  - OR: Hold Ctrl + Left click and drag
- **Zoom**: Scroll mouse wheel
  - OR: Press `+` to zoom in, `-` to zoom out

### 4. Use the Grid
- Grid is ON by default (see the gray lines?)
- Your clicks **snap** to grid intersections
- Press `G` to hide/show the grid
- Press `Shift+G` to toggle snap on/off

### 5. Adjust Grid Spacing
Look at the **Properties Panel** on the right:
- Change "Spacing" to make the grid larger/smaller
- Try `5` for fine detail, `20` for rough layout

---

## Try These Features

### Save Your Work
1. Click **Save** button (top bar)
2. A `.json` file downloads automatically
3. Open it anytime with the **Open** button

### Undo/Redo
- Made a mistake? Press `Ctrl+Z` to undo
- Press `Ctrl+Y` to redo

### Fit to View
- Press `F` to zoom and center everything you've drawn

### Material Properties
In the Properties Panel:
- Set **Thickness**: Your sheet metal thickness (mm)
- Set **K-Factor**: For bend calculations (default: 0.44)
- Set **Bend Radius**: Inside radius for bends (mm)

---

## Keyboard Shortcuts Cheat Sheet

```
Drawing:
  L          - Line Tool
  ESC        - Cancel current operation

View:
  G          - Toggle Grid
  Shift+G    - Toggle Snap
  F          - Fit to View
  +/-        - Zoom In/Out

Edit:
  Ctrl+Z     - Undo
  Ctrl+Y     - Redo
  Ctrl+S     - Save
  Delete     - Delete Selected

Navigation:
  Middle Mouse      - Pan
  Ctrl+Left Mouse   - Pan
  Mouse Wheel       - Zoom
```

---

## What to Try Next

1. **Draw a Simple Profile**
   - Try drawing a simple "L" bracket
   - Use the grid to keep it square
   - Save it!

2. **Experiment with Grid**
   - Change grid spacing to 5mm
   - Draw something detailed
   - Change to 20mm - easier for large parts!

3. **Play with Pan & Zoom**
   - Draw a small shape
   - Zoom in really close
   - Pan around to explore
   - Press `F` to fit it back in view

4. **Test Undo/Redo**
   - Draw several lines
   - Press `Ctrl+Z` multiple times
   - Press `Ctrl+Y` to redo
   - Magic! ✨

---

## Common Questions

**Q: Why won't it snap to the grid?**
A: Press `Shift+G` to toggle snap on. Check the status bar - it should say "Snap: ON"

**Q: How do I delete a line?**
A: Selection tool coming soon! For now, use Undo (`Ctrl+Z`)

**Q: Can I export to DXF/AutoCAD?**
A: DXF export is coming in the next update! For now, save as JSON.

**Q: Where are my files saved?**
A: In your browser's Downloads folder. Look for files like `Untitled Profile.json`

**Q: Why does the canvas look fuzzy?**
A: It shouldn't! The app uses DPI scaling for crisp graphics. Try zooming out and back in.

---

## Need Help?

Check the full [README.md](README.md) for:
- Complete keyboard shortcuts
- Architecture details
- How to extend the app
- Sheet metal calculations

---

## You're Ready! 🎉

Now go build something awesome! Your sheet metal designs await. 🔧✨
