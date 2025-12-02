#!/usr/bin/env python3
"""
Script to populate the recipes table with data for all products
"""
import pandas as pd
from sqlalchemy import create_engine, text

# Database connection
engine = create_engine('mysql+pymysql://root:@localhost:3306/databrew')

# Get all unique product IDs from coffee_sales
products_df = pd.read_sql('SELECT DISTINCT product_id FROM coffee_sales ORDER BY product_id', engine)
product_ids = products_df['product_id'].tolist()

# Get all ingredients
ingredients_df = pd.read_sql('SELECT ingredient_id FROM ingredients', engine)
ingredient_ids = ingredients_df['ingredient_id'].tolist()

print(f"Found {len(product_ids)} products and {len(ingredient_ids)} ingredients")

# Create recipe data for each product
# Each product will use 2-3 ingredients with varying quantities
recipes_data = []
recipe_id = 1

# Define ingredient combinations for different product types
ingredient_combinations = {
    'coffee': [1, 3],  # Beans, Sugar
    'tea': [2, 4],     # Milk, Honey
    'chocolate': [1, 2, 5],  # Beans, Milk, Vanilla
    'default': [1, 2, 3]  # Beans, Milk, Sugar
}

for product_id in product_ids:
    # Get product type from coffee_sales
    product_info = pd.read_sql(
        f"SELECT product_type FROM coffee_sales WHERE product_id = {product_id} LIMIT 1",
        engine
    )
    
    if product_info.empty:
        continue
    
    product_type = product_info['product_type'].iloc[0].lower()
    
    # Select ingredients based on product type
    if 'coffee' in product_type:
        selected_ingredients = ingredient_combinations['coffee']
    elif 'tea' in product_type:
        selected_ingredients = ingredient_combinations['tea']
    elif 'chocolate' in product_type:
        selected_ingredients = ingredient_combinations['chocolate']
    else:
        selected_ingredients = ingredient_combinations['default']
    
    # Create recipes for selected ingredients
    for idx, ingredient_id in enumerate(selected_ingredients):
        if ingredient_id <= len(ingredient_ids):
            quantity = 18 + (idx * 5)  # Varying quantities: 18, 23, 28
            recipes_data.append({
                'recipe_id': recipe_id,
                'product_id': product_id,
                'ingredient_id': ingredient_id,
                'quantity_used': quantity
            })
            recipe_id += 1

# Create DataFrame from recipes data
recipes_df = pd.DataFrame(recipes_data)

print(f"\nCreated {len(recipes_df)} recipe entries")
print("\nSample recipes:")
print(recipes_df.head(10).to_string())

# Insert into database
try:
    # First, clear existing recipes (optional, comment out if you want to keep them)
    with engine.connect() as conn:
        conn.execute(text("DELETE FROM recipes"))
        conn.commit()
    
    # Insert new recipes
    recipes_df.to_sql('recipes', engine, if_exists='append', index=False)
    print("\n✅ Successfully populated recipes table!")
    
    # Verify
    count = pd.read_sql('SELECT COUNT(*) as count FROM recipes', engine)
    print(f"Total recipes in database: {count['count'].iloc[0]}")
    
except Exception as e:
    print(f"\n❌ Error populating recipes: {str(e)}")
