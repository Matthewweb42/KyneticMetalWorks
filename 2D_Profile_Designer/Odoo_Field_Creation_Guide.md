# 📋 How to Create Custom Fields in Odoo Studio

## 🎯 Two-Part Setup

Your order sheet pulls data from **TWO places**:
1. **Product Template** - Standard product specs (you already have these!)
2. **Manufacturing Order** - Per-run production data (create these now)

---

## 🏭 PART 1: Product Fields (Already Created!)

You've already created these on **Product Template**. These are your standard specs:
- ✅ Metal Type, Metal Gauge, Color, Color Manufacturer
- ✅ Profile Name, Profile Image
- ✅ Has Ribs, Has Holes
- ✅ Hole Size, Hole Spacing, Start From End, Distance From Edge
- ✅ Length

**Nothing more to do here!** ✓

---

## 🏭 PART 2: Manufacturing Order Fields (Create These Now!)

### **Opening Odoo Studio for Manufacturing Orders**

1. Go to **Manufacturing → Operations → Manufacturing Orders**
2. Open any existing Manufacturing Order (or create a new one)
3. Click the **🔧 Studio** button in the top-right corner
4. You're now in Studio edit mode!

---

## 🔧 Adding a Custom Field

### **Basic Process:**
1. In Studio mode, you'll see your Sale Order form
2. Click **+ Field** button (or drag from the left panel)
3. Choose your **Field Type**
4. Configure the field settings
5. Click **Confirm** (checkmark icon)

---

## 📝 Field Types Reference

### **Text Field** (For names, descriptions)
- Use for: Color, Profile Name, Hole Size, etc.
- **Single Line:** Short text (names, codes)
- **Multi Line:** Long descriptions

### **Selection Field** (Dropdown menu)
- Use for: Metal Type, Metal Gauge
- You'll add multiple choice options
- Users select one value from the list

### **Checkbox** (True/False)
- Use for: Has Holes, Has Ribs, Process checkboxes
- Simple on/off toggle

### **Float** (Decimal numbers)
- Use for: Length, Material Usage
- Stores numbers with decimals (12.50, 0.032, etc.)

### **Date**
- Use for: Date Finished
- Calendar picker for selecting dates

### **Binary/Image**
- Use for: Profile Image
- Allows file/image uploads

---

---

## 🚀 Fields to Create on Manufacturing Order

These track **production-specific** information for each manufacturing run:

### **1️⃣ Completed By** (Text)
```
1. Click "+ Field"
2. Select: "Text"
3. Field Name: completed_by
4. Field Label: "Completed By"
5. Click ✓ Confirm
```

### **2️⃣ Date Finished** (Date)
```
1. Click "+ Field"
2. Select: "Date"
3. Field Name: date_finished
4. Field Label: "Date Finished"
5. Click ✓ Confirm
```

### **3️⃣-8️⃣ Process Checkboxes** (All Checkboxes)
Create these 6 checkboxes to track production stages:

```
For EACH of these:
1. Click "+ Field"
2. Select: "Checkbox"
3. Use the field names and labels below:

- Field Name: process_slit        Label: "Process: Slit"
- Field Name: process_punched     Label: "Process: Punched"
- Field Name: process_bent        Label: "Process: Bent"
- Field Name: process_packaged    Label: "Process: Packaged"
- Field Name: process_shipped     Label: "Process: Shipped"
- Field Name: process_invoiced    Label: "Process: Invoiced"

4. Click ✓ Confirm for each
```

### **9️⃣ Material Usage (Actual)** (Float)
```
1. Click "+ Field"
2. Select: "Float"
3. Field Name: material_usage_actual
4. Field Label: "Material Usage (Actual)"
5. Digits: (16, 2)
6. Click ✓ Confirm
```

### **🔟 Shipping Weight** (Text)
```
1. Click "+ Field"
2. Select: "Text"
3. Field Name: shipping_weight
4. Field Label: "Shipping Weight"
5. Click ✓ Confirm
```

### **1️⃣1️⃣ Package Dimensions** (Text)
```
1. Click "+ Field"
2. Select: "Text"
3. Field Name: package_dimensions
4. Field Label: "Package Dimensions"
5. Click ✓ Confirm
```

### **1️⃣2️⃣ Signature** (Text)
```
1. Click "+ Field"
2. Select: "Text"
3. Field Name: signature
4. Field Label: "Signature"
5. Click ✓ Confirm
```

---

## 🎨 Organizing MO Fields

After creating all fields on the Manufacturing Order:

### **Create a New Tab:**
1. In Studio, drag a **"Tab"** element onto the MO form
2. Name it: **"Production Details"**

### **Group Fields:**

**Production Tracking:**
- Completed By
- Date Finished
- Material Usage (Actual)

**Process Status:**
- All 6 process checkboxes (Slit, Punched, Bent, Packaged, Shipped, Invoiced)

**Shipping Info:**
- Shipping Weight
- Package Dimensions
- Signature

---

## ✅ Checklist

After creating all MO fields, verify:

- [ ] 12 fields created on Manufacturing Order model
- [ ] All checkboxes work
- [ ] Float fields allow decimals
- [ ] Date picker works
- [ ] Fields organized in "Production Details" tab
- [ ] Click "✓" to exit Studio mode

---

## 🚀 Next Steps

Once you've created these fields on Manufacturing Orders:
1. Let me know you're ready
2. I'll create the complete Order Sheet template
3. The template will pull:
   - Product specs from `o.product_id.x_studio_*`
   - Production data from `o.x_studio_*`

---

## 💡 How It Works

When you print the Order Sheet from a Manufacturing Order:
- **Product Name** → From MO's linked product
- **Metal Type, Gauge, Color** → From product specs
- **Profile Image** → From product
- **Completed By, Date** → From MO fields
- **Process Checkboxes** → From MO fields
- **Shipping Info** → From MO fields

---

Ready to create the template? Just let me know! 🎯
