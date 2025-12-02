# Ingredient Management System - User Guide

## Overview

The Ingredient Management System allows you to manage all ingredients, track stock levels, create products, and define recipes for each coffee product.

## Features

### 1. Ingredients Management

- **View All Ingredients**: See your complete ingredient inventory with stock levels
- **Add New Ingredients**: Create new ingredients with:

  - Name (e.g., Coffee Beans, Milk)
  - Unit of measurement (kg, grams, liters, ml, pieces)
  - Current stock quantity
  - Reorder level (alert when stock goes below this)
  - Unit cost (for profit calculations)
  - Supplier information
  - Notes

- **Edit Ingredients**: Update stock quantities, reorder levels, and other details
- **Delete Ingredients**: Remove ingredients no longer used
- **Low Stock Alerts**: Automatic warnings when ingredients are below reorder level

### 2. Products & Recipes Management

- **View All Products**: See all coffee products with their prices
- **Add New Products**: Create new menu items with:

  - Product name (e.g., Caramel Latte)
  - Product type (Coffee, Tea, Pastry, Other)
  - Selling price
  - Description

- **Define Recipes**: For each product, specify:

  - Which ingredients are needed
  - How much of each ingredient per unit
  - Special notes (e.g., "double shot", "extra foam")

- **Stock Availability**: Automatically calculates how many units can be made with current stock

### 3. Cost Analysis

The system automatically calculates:

- Total cost per product (based on ingredient costs)
- Profit per product
- Profit margin percentage

## How to Use

### Adding a New Ingredient

1. Click "Ingredients" in the sidebar
2. Click "Add Ingredient" button
3. Fill in all required fields (marked with \*)
4. Click "Add Ingredient" to save

### Creating a Product Recipe

1. Click "Products & Recipes" tab
2. Add a product if needed using "Add Product"
3. Select the product from the list
4. Click "Add Ingredient" to add ingredients to the recipe
5. Select ingredient and specify quantity needed
6. Repeat for all ingredients in the recipe

### Example: Caramel Latte Recipe

- Coffee Beans (Arabica): 0.018 kg (18 grams for double shot)
- Milk (Whole): 0.25 liters (250ml for steamed milk)
- Caramel Syrup: 30 ml (one pump)
- Coffee Cup (Large): 1 piece

## Database Tables

### Tables Created:

1. **ingredients**: Stores all ingredient information
2. **products**: Stores menu items (coffee products)
3. **product_ingredients**: Links products to ingredients (recipes)

### Sample Data Included:

- 13 common coffee shop ingredients
- 8 popular coffee products
- 4 complete recipes (Espresso, Cappuccino, Caramel Latte, Mocha)

## API Endpoints Available

### Ingredients

- `GET /ingredients` - Get all ingredients
- `POST /ingredients` - Create new ingredient
- `PUT /ingredients/{id}` - Update ingredient
- `DELETE /ingredients/{id}` - Delete ingredient

### Products

- `GET /products` - Get all products
- `POST /products` - Create new product
- `GET /products/{id}/ingredients` - Get product recipe
- `POST /products/{id}/ingredients` - Add ingredient to recipe
- `DELETE /products/{id}/ingredients/{ingredient_id}` - Remove from recipe
- `GET /products/{id}/cost-analysis` - Get cost breakdown

## Tips for Managers

1. **Regular Stock Updates**: Update stock quantities regularly after receiving deliveries
2. **Set Realistic Reorder Levels**: Set reorder levels based on:

   - Daily usage rate
   - Delivery lead time
   - Safety buffer (3-5 days recommended)

3. **Cost Tracking**: Update unit costs to keep profit margins accurate
4. **Recipe Accuracy**: Ensure recipes match actual preparation to:

   - Track costs accurately
   - Manage inventory properly
   - Prevent waste

5. **Low Stock Monitoring**: Check low stock alerts daily to prevent shortages

## Accessing the System

1. Navigate to: http://localhost:5173 (or your frontend URL)
2. Log in to your account
3. Click "Ingredients" in the sidebar
4. Start managing your ingredients and recipes!

## Backend API

The backend server must be running on: http://localhost:8080

To start the backend:

```bash
cd backend
python -m uvicorn app.main:app --reload --port 8080
```

## Support

For issues or questions, check the database connection and ensure:

- MySQL is running
- Database 'databrew' exists
- All tables are created (run setup_ingredients.py)
- Backend server is running
