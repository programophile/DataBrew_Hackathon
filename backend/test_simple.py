#!/usr/bin/env python3
"""Test the product endpoints"""
from sqlalchemy import create_engine
import pandas as pd

engine = create_engine("mysql+pymysql://root:@localhost:3306/databrew")

# Test 1: Get categories with inventory
print("=== Test 1: Categories with inventory ===")
query1 = """
SELECT DISTINCT 
    cs.product_id as id,
    cs.product_category as name
FROM coffee_sales cs
WHERE cs.product_id IN (SELECT DISTINCT product_id FROM inventory)
AND cs.product_category IS NOT NULL
ORDER BY cs.product_category, cs.product_id
"""
df1 = pd.read_sql(query1, engine)
df1_unique = df1.drop_duplicates(subset=['name'], keep='first')
print(df1_unique)

# Test 2: Get ingredients for product_id 1
print("\n=== Test 2: Ingredients for product_id 1 ===")
query2 = """
SELECT 
    id,
    item_name,
    stock,
    unit
FROM inventory
WHERE product_id = 1
ORDER BY item_name
"""
df2 = pd.read_sql(query2, engine)
print(df2)

# Test 3: Get ingredients for product_id 11
print("\n=== Test 3: Ingredients for product_id 11 ===")
query3 = """
SELECT 
    id,
    item_name,
    stock,
    unit
FROM inventory
WHERE product_id = 11
ORDER BY item_name
"""
df3 = pd.read_sql(query3, engine)
print(df3)
