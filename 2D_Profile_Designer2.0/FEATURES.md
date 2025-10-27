# Features Overview

## 🎯 Current Features (v0.1)

### Drawing Tools

#### ✅ Line Tool
- Click to place start point
- Click again to place end point
- Live preview with length and angle
- Snaps to grid automatically
- **Shortcut:** `L`

```
Usage:
1. Press L or click Line tool
2. Click on canvas for start point
3. Move mouse to see preview
4. Click for end point
5. Repeat to chain lines
6. Press ESC to start fresh line
```

---

### View Controls

#### ✅ Pan
Navigate large drawings by moving the view.

**Methods:**
- Middle mouse button + drag
- Ctrl + Left mouse + drag

#### ✅ Zoom
Get closer or further from your work.

**Methods:**
- Mouse wheel (in/out)
- `+` key (zoom in)
- `-` key (zoom out)
- Zoom follows mouse position!

#### ✅ Fit to View
Automatically frame your entire drawing.

**Shortcut:** `F`

#### ✅ Grid
Visual guide with major and minor lines.

**Features:**
- Major grid lines (every N mm)
- Minor subdivisions (5 by default)
- Origin axes (red X, green Y)
- Customizable spacing in Properties panel

**Shortcut:** `G` (toggle on/off)

#### ✅ Snap to Grid
Points automatically align to grid intersections.

**Shortcut:** `Shift+G` (toggle on/off)

---

### Edit Operations

#### ✅ Undo
Go back one step.

**Shortcut:** `Ctrl+Z`
**Limit:** 50 steps (configurable)

#### ✅ Redo
Go forward one step (after undo).

**Shortcut:** `Ctrl+Y`

#### ✅ Delete
Remove selected geometry.

**Shortcut:** `Delete`
**Status:** Selection tool needed first

---

### File Operations

#### ✅ New Profile
Start fresh with blank canvas.

**Button:** "New" in header
**Warning:** Prompts before clearing

#### ✅ Save Profile
Export to JSON file.

**Shortcut:** `Ctrl+S`
**Format:** `.json` file in Downloads folder

**Example JSON:**
```json
{
  "segments": [
    {
      "type": "line",
      "start": {"x": 0, "y": 0},
      "end": {"x": 100, "y": 0}
    }
  ],
  "material": {
    "thickness": 1.5,
    "kFactor": 0.44,
    "bendRadius": 3
  }
}
```

#### ✅ Open Profile
Load previously saved design.

**Button:** "Open" in header
**Accepts:** `.json` files

---

### Material Properties

#### ✅ Thickness
Sheet metal thickness in millimeters.

**Default:** 1.5 mm
**Range:** 0.1 - 50 mm
**Used for:** Bend allowance calculations

#### ✅ K-Factor
Ratio for bend allowance formula.

**Default:** 0.44
**Range:** 0 - 1
**Typical values:**
- Soft materials: 0.33
- Medium: 0.44
- Hard materials: 0.50

#### ✅ Bend Radius
Inside radius of bends.

**Default:** 3 mm
**Range:** 0 - 100 mm
**Rule of thumb:** 2-3× material thickness

---

### Sheet Metal Calculations

#### ✅ Bend Allowance Formula
```
BA = (π/180) × Angle × (Radius + K × Thickness)
```

**Where:**
- BA = Bend Allowance (length added by bend)
- Angle = Bend angle in degrees
- Radius = Inside bend radius
- K = K-factor
- Thickness = Material thickness

**Example:**
```javascript
Material: 1.5mm thick, K=0.44, R=3mm
Bend: 90 degrees

BA = (π/180) × 90 × (3 + 0.44 × 1.5)
BA = 1.571 × 3.66
BA = 5.75 mm
```

#### ✅ Bend Deduction Formula
```
BD = 2 × (Radius + Thickness) × tan(Angle/2) - BA
```

**Where:**
- BD = Bend Deduction (length removed from flat pattern)
- Other variables same as above

**Example:**
```javascript
Same material and bend as above

BD = 2 × (3 + 1.5) × tan(45°) - 5.75
BD = 9 × 1 - 5.75
BD = 3.25 mm
```

---

### Grid Settings

#### ✅ Spacing
Distance between major grid lines.

**Default:** 10 mm
**Range:** 1 - 1000 mm
**Typical:**
- Fine detail: 5 mm
- General: 10 mm
- Large parts: 20-50 mm

#### ✅ Subdivisions
How many minor lines between major lines.

**Default:** 5
**Range:** 1 - 10
**Example:**
- Spacing 10mm, Subdivisions 5 = minor line every 2mm

---

### Status Bar

#### ✅ Coordinates Display
Shows current mouse position in world coordinates.

**Format:** `X: 45.23, Y: -12.67`
**Units:** Millimeters
**Updates:** Real-time

#### ✅ Zoom Level
Current zoom percentage.

**Format:** `Zoom: 150%`
**Range:** 10% - 1000%

#### ✅ Tool Display
Currently active tool.

**Format:** `Tool: Line`
**Updates:** When tool changes

#### ✅ Snap Status
Whether snap to grid is enabled.

**Format:** `Snap: ON` or `Snap: OFF`
**Toggle:** `Shift+G`

---

## 🔄 Coming Soon

### Tools

#### 🔄 Selection Tool
- Click to select segments
- Drag to move
- Handles for rotate/scale
- Multi-select with Shift

#### 🔄 Arc Tool
Multiple modes:
- **3-Point Arc** - Click 3 points
- **Center+Radius** - Click center, then edge
- **Tangent Arc** - Arc from line end

#### 🔄 Rectangle Tool
- Click corner, drag to opposite corner
- Shows width × height while dragging
- Option for rounded corners

#### 🔄 Dimension Tool
Types:
- **Linear** - Horizontal or vertical distance
- **Aligned** - Distance along any angle
- **Angular** - Angle between lines
- **Radius/Diameter** - For arcs

#### 🔄 Bend Line Tool
- Click to place bend line
- Shows bend angle
- Preview of bent vs flat state
- Calculates bend allowance automatically

---

### Features

#### 🔄 Segment Properties
Edit selected segment:
- Change line endpoints
- Adjust arc radius
- Modify colors/line types

#### 🔄 Constraints
Geometric relationships:
- **Parallel** - Lines stay parallel
- **Perpendicular** - 90° angle maintained
- **Tangent** - Arc tangent to line
- **Concentric** - Arcs share center
- **Equal Length** - Lines same size

#### 🔄 Snap Modes
Beyond grid snapping:
- **Endpoint** - Snap to line/arc ends
- **Midpoint** - Snap to middle of segments
- **Intersection** - Where lines cross
- **Center** - Arc/circle centers
- **Perpendicular** - Drop perpendicular to line

#### 🔄 Layers
Organize complex profiles:
- Multiple drawing layers
- Show/hide layers
- Lock layers
- Layer colors

#### 🔄 Part Library
Reusable shapes:
- L-brackets
- U-channels
- Z-profiles
- Custom saved shapes

---

### Export Formats

#### 🔄 DXF Export
Industry standard CAD format.

**Uses:**
- Import into AutoCAD
- CNC machines
- Laser cutters
- Other CAD software

**Includes:**
- All geometry
- Layers
- Dimensions
- Bend lines

#### 🔄 SVG Export
Scalable vector graphics.

**Uses:**
- Web display
- Print layouts
- Vector editing
- Presentations

**Options:**
- Include dimensions
- Include grid
- Custom styles

#### 🔄 PDF Export
Print-ready with dimensions.

**Uses:**
- Shop floor prints
- Customer approvals
- Documentation

**Includes:**
- Profile view
- Dimensions
- Material specs
- Bend table

#### 🔄 Image Export
Raster graphics (PNG/JPEG).

**Uses:**
- Quick sharing
- Email attachments
- Documentation

**Options:**
- Resolution (DPI)
- Background color
- Grid on/off

---

### Advanced Features

#### 🔄 Flat Pattern
Calculate unfolded shape.

**Shows:**
- Flat length
- Bend deductions applied
- Cut-out layout
- Hole positions

#### 🔄 Bend Table
Automatic list of all bends.

**Includes:**
- Bend sequence
- Bend angles
- Bend allowances
- Inside/outside radius

#### 🔄 Array Tool
Create patterns.

**Modes:**
- **Linear** - Row/column
- **Circular** - Around point
- **Along path** - Follow curve

#### 🔄 Mirror Tool
Flip geometry.

**Options:**
- Mirror across X axis
- Mirror across Y axis
- Mirror across custom line

#### 🔄 Offset Tool
Create parallel copies.

**Uses:**
- Wall thickness
- Clearances
- Nested parts

**Options:**
- Inside or outside
- Multiple offsets
- Corner rounding

---

## 💡 Feature Requests?

Have an idea for a new feature?

Document it in this format:

```markdown
### Feature Name
**Description:** What it does
**Use Case:** Why it's needed
**Priority:** High/Medium/Low
**Effort:** Hours/Days/Weeks estimate
```

---

## 📊 Feature Maturity

| Feature | Status | Documentation | Tests | Polish |
|---------|--------|---------------|-------|--------|
| Line Tool | ✅ Complete | ✅ Done | ⚠️ Manual | ✅ Done |
| Grid System | ✅ Complete | ✅ Done | ⚠️ Manual | ✅ Done |
| Pan/Zoom | ✅ Complete | ✅ Done | ⚠️ Manual | ✅ Done |
| Save/Load | ✅ Complete | ✅ Done | ⚠️ Manual | ✅ Done |
| Undo/Redo | ✅ Complete | ✅ Done | ⚠️ Manual | ✅ Done |
| Material Props | ✅ Complete | ✅ Done | ⚠️ Manual | ✅ Done |
| Selection | 🔄 Planned | ❌ TODO | ❌ TODO | ❌ TODO |
| Arc Tool | 🔄 Planned | ❌ TODO | ❌ TODO | ❌ TODO |
| DXF Export | 🔄 Planned | ❌ TODO | ❌ TODO | ❌ TODO |

**Legend:**
- ✅ Complete
- 🔄 In Progress
- ❌ Not Started
- ⚠️ Needs Work

---

End of Features Overview
