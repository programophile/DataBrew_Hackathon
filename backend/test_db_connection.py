#!/usr/bin/env python3
"""
Test script to verify database connection and table structure
"""
import sys
sys.path.insert(0, 'd:\\DataBrew_Hackathon\\backend')

from sqlalchemy import create_engine, inspect
import pandas as pd

# Try to connect to the database
try:
    engine = create_engine("mysql+pymysql://root:@localhost:3306/databrew")
    print("✓ Database connection established successfully")
    
    # Get inspector
    inspector = inspect(engine)
    
    # List all tables
    tables = inspector.get_table_names()
    print(f"\n✓ Available tables ({len(tables)}):")
    for table in tables:
        print(f"  - {table}")
    
    # Check coffee_sales table
    if "coffee_sales" in tables:
        print("\n✓ coffee_sales table found")
        columns = [col['name'] for col in inspector.get_columns('coffee_sales')]
        print(f"  Columns: {columns}")
        
        # Try to fetch data
        query = "SELECT COUNT(*) as count FROM coffee_sales"
        result = pd.read_sql(query, engine)
        print(f"  Row count: {result['count'].iloc[0]}")
        
        # Check for product_detail and product_id
        if 'product_detail' in columns and 'product_id' in columns:
            query = "SELECT DISTINCT product_detail, product_id FROM coffee_sales LIMIT 5"
            result = pd.read_sql(query, engine)
            print(f"  Sample products:")
            for _, row in result.iterrows():
                print(f"    - {row['product_detail']} (ID: {row['product_id']})")
    else:
        print("\n✗ coffee_sales table NOT found")
    
    # Check inventory table
    if "inventory" in tables:
        print("\n✓ inventory table found")
        columns = [col['name'] for col in inspector.get_columns('inventory')]
        print(f"  Columns: {columns}")
        
        # Try to fetch data
        query = "SELECT COUNT(*) as count FROM inventory"
        result = pd.read_sql(query, engine)
        print(f"  Row count: {result['count'].iloc[0]}")
    else:
        print("\n✗ inventory table NOT found")
    
except Exception as e:
    print(f"✗ Error: {str(e)}")
    import traceback
    traceback.print_exc()
