#!/usr/bin/env python3
"""
Database connection and table check script for DataBrew application
"""
import os
import sys
import pandas as pd
from sqlalchemy import create_engine, inspect

def check_database_connection(db_url):
    """Check database connection and list all tables"""
    try:
        # Create database engine
        engine = create_engine(db_url)
        
        # Test connection
        with engine.connect() as conn:
            print("✅ Successfully connected to the database!")
            
            # Get table names
            inspector = inspect(engine)
            tables = inspector.get_table_names()
            
            if not tables:
                print("\n❌ No tables found in the database.")
                return False
                
            print(f"\n📋 Found {len(tables)} tables in the database:")
            for table in tables:
                # Get column details for each table
                columns = inspector.get_columns(table)
                print(f"\nTable: {table}")
                print("-" * (len(table) + 7))
                print(f"{'Column':<20} {'Type':<15} {'Nullable'}")
                print("-" * 50)
                for col in columns:
                    print(f"{col['name']:<20} {str(col['type']):<15} {col['nullable']}")
                
                # Show row count and sample data (first 2 rows)
                try:
                    sample = pd.read_sql(f"SELECT * FROM {table} LIMIT 2", engine)
                    print(f"\n📊 Sample data (first 2 rows of {len(sample)} total):")
                    print(sample.to_string(index=False))
                except Exception as e:
                    print(f"\n⚠️ Could not fetch sample data: {str(e)}")
                
                print("\n" + "="*80 + "\n")
            
            return True
            
    except Exception as e:
        print(f"❌ Error connecting to database: {str(e)}")
        return False

if __name__ == "__main__":
    # Default connection string from main.py
    db_url = "mysql+pymysql://root:@localhost:3306/databrew"
    
    # Allow override via command line
    if len(sys.argv) > 1:
        db_url = sys.argv[1]
    
    print(f"🔍 Testing database connection to: {db_url}")
    success = check_database_connection(db_url)
    
    if not success:
        print("\n💡 Troubleshooting tips:")
        print("1. Make sure MySQL server is running")
        print("2. Verify the database 'databrew' exists")
        print("3. Check your MySQL username and password")
        print("4. Make sure the user has proper permissions")
        print("\nYou can specify a different connection string as an argument, e.g.:")
        print("python check_db.py mysql+pymysql://user:password@localhost:3306/dbname")
        
        # Try SQLite as fallback
        sqlite_path = os.path.join(os.path.dirname(__file__), "backend", "coffee_shop.db")
        if os.path.exists(sqlite_path):
            print(f"\n🔍 Found SQLite database at {sqlite_path}, trying that...")
            check_database_connection(f"sqlite:///{sqlite_path}")
