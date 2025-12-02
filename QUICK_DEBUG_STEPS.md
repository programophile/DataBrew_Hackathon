# Quick Debug Steps for Add Ingredient Button

## What I See in Your Screenshot:
- You're on the **Products & Recipes** tab looking at "Cappuccino Recipe"
- The console is open but shows no logs
- You're trying to add an ingredient to a recipe (not a new ingredient to inventory)

## To Add a NEW Ingredient to Inventory:

1. **Switch to the Ingredients Tab**
   - Click the "Ingredients" tab button (should be at the top, with a Package icon)
   - NOT the "Products & Recipes" tab

2. **Click "Add Ingredient" on the Ingredients page**
   - This will open a different dialog for adding ingredients to your inventory

3. **Watch the Console**
   - Keep DevTools open
   - Click "Add Ingredient"
   - You should see logs like:
     ```
     handleAddIngredient called with: {...}
     [API] addIngredient called
     [API] URL: http://localhost:8080/ingredients
     ```

## Current Issue:

The button you're clicking is **"Add Ingredient to Recipe"** which:
- Adds an existing ingredient to a product's recipe
- This is DIFFERENT from adding a new ingredient to inventory

## Test Steps:

### Test 1: Add New Ingredient to Inventory
1. Go to **Ingredients tab** (top of page)
2. Click **"Add Ingredient"** button (top right)
3. Fill in form:
   - Name: Test Ingredient
   - Unit: kg
   - Stock: 10
   - Reorder: 5
4. Click **"Add Ingredient"** button in dialog
5. Check console for logs

### Test 2: Add Ingredient to Recipe (what you're doing now)
1. Go to **Products & Recipes tab**
2. Click on a product (like Cappuccino)
3. Click **"Add Ingredient"** in the recipe section
4. Select an ingredient from dropdown
5. Enter quantity
6. Click **"Add to Recipe"**
7. Check console for logs

## Expected Console Output:

When adding to inventory:
```
handleAddIngredient called with: {name: "Test", unit: "kg", ...}
[API] addIngredient called
[API] URL: http://localhost:8080/ingredients
[API] Payload: {name: "Test", ...}
[API] Response status: 200
[API] Success result: {message: "...", id: 46}
```

When adding to recipe:
```
handleAddRecipeIngredient called
[API] addProductIngredient called
[API] URL: http://localhost:8080/products/3/ingredients
[API] Payload: {ingredient_id: 1, quantity_needed: 0.25, ...}
[API] Response status: 200
```

## If Console Shows Nothing:

1. **Clear Console Filters**
   - Make sure no filter is applied (look for filter textbox)
   - Make sure "Default levels" is selected (not filtering errors only)

2. **Check if Frontend is Using Cached Code**
   - Press `Ctrl + Shift + R` to hard reload
   - Or clear cache and reload

3. **Verify Frontend is Running**
   - Check if you see the latest code changes
   - The console.log statements should appear

## Quick Test in Console:

Open the browser console and type:
```javascript
fetch('http://localhost:8080/ingredients')
  .then(r => r.json())
  .then(d => console.log('Backend working:', d))
  .catch(e => console.error('Backend error:', e))
```

If this works, backend is fine. If not, backend might be down.
