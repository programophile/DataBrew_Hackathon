import pymysql

# Connect to database
conn = pymysql.connect(
    host='localhost',
    user='root',
    password='',
    database='databrew'
)

try:
    cursor = conn.cursor()

    print("=" * 60)
    print("CHECKING INGREDIENTS TABLE")
    print("=" * 60)

    # Check if table exists
    cursor.execute("SHOW TABLES LIKE 'ingredients'")
    table_exists = cursor.fetchone()

    if table_exists:
        print("\n[OK] Table 'ingredients' EXISTS")

        # Show table structure
        print("\nTable Structure:")
        cursor.execute("DESCRIBE ingredients")
        columns = cursor.fetchall()
        for col in columns:
            print(f"  - {col[0]:20s} {col[1]:20s} NULL:{col[2]} Key:{col[3]}")

        # Check record count
        cursor.execute("SELECT COUNT(*) FROM ingredients")
        count = cursor.fetchone()[0]
        print(f"\nTotal Records: {count}")

        # Show sample records
        if count > 0:
            print("\nSample Records (first 3):")
            cursor.execute("SELECT id, name, unit, stock_quantity FROM ingredients LIMIT 3")
            for row in cursor.fetchall():
                print(f"  ID: {row[0]}, Name: {row[1]}, Unit: {row[2]}, Stock: {row[3]}")
    else:
        print("\n[MISSING] Table 'ingredients' DOES NOT EXIST")
        print("\nCreating table now...")

        # Create the table
        create_table_sql = """
        CREATE TABLE ingredients (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL UNIQUE,
            unit VARCHAR(50) NOT NULL,
            stock_quantity DECIMAL(10, 2) NOT NULL DEFAULT 0,
            reorder_level DECIMAL(10, 2) NOT NULL DEFAULT 0,
            unit_cost DECIMAL(10, 2) DEFAULT 0,
            supplier VARCHAR(200),
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
        """

        cursor.execute(create_table_sql)
        conn.commit()
        print("[OK] Table 'ingredients' created successfully!")

        # Insert sample data
        print("\nInserting sample data...")
        sample_data = [
            ('Coffee Beans (Arabica)', 'kg', 50, 10, 15.50, 'Premium Coffee Suppliers'),
            ('Milk (Whole)', 'liters', 100, 20, 2.50, 'Local Dairy Farm'),
            ('Sugar', 'kg', 30, 5, 1.20, 'Wholesale Foods'),
        ]

        insert_sql = """
            INSERT INTO ingredients (name, unit, stock_quantity, reorder_level, unit_cost, supplier)
            VALUES (%s, %s, %s, %s, %s, %s)
        """

        cursor.executemany(insert_sql, sample_data)
        conn.commit()
        print(f"✓ Inserted {cursor.rowcount} sample records")

    # Check products table
    print("\n" + "=" * 60)
    print("CHECKING PRODUCTS TABLE")
    print("=" * 60)

    cursor.execute("SHOW TABLES LIKE 'products'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM products")
        count = cursor.fetchone()[0]
        print(f"✓ Table 'products' exists with {count} records")
    else:
        print("✗ Table 'products' DOES NOT EXIST")
        print("\nCreating products table...")

        create_products_sql = """
        CREATE TABLE products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            product_name VARCHAR(100) NOT NULL UNIQUE,
            product_type VARCHAR(50) NOT NULL,
            selling_price DECIMAL(10, 2) NOT NULL,
            description TEXT,
            is_active BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
        """
        cursor.execute(create_products_sql)
        conn.commit()
        print("✓ Table 'products' created!")

    # Check product_ingredients junction table
    print("\n" + "=" * 60)
    print("CHECKING PRODUCT_INGREDIENTS TABLE")
    print("=" * 60)

    cursor.execute("SHOW TABLES LIKE 'product_ingredients'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM product_ingredients")
        count = cursor.fetchone()[0]
        print(f"✓ Table 'product_ingredients' exists with {count} records")
    else:
        print("✗ Table 'product_ingredients' DOES NOT EXIST")
        print("\nCreating product_ingredients table...")

        create_pi_sql = """
        CREATE TABLE product_ingredients (
            id INT AUTO_INCREMENT PRIMARY KEY,
            product_id INT NOT NULL,
            ingredient_id INT NOT NULL,
            quantity_needed DECIMAL(10, 2) NOT NULL,
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
            FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
            UNIQUE KEY unique_product_ingredient (product_id, ingredient_id)
        )
        """
        cursor.execute(create_pi_sql)
        conn.commit()
        print("✓ Table 'product_ingredients' created!")

    # Test insert
    print("\n" + "=" * 60)
    print("TESTING INSERT")
    print("=" * 60)

    test_name = f"Test Ingredient {conn.thread_id()}"
    try:
        insert_test = """
            INSERT INTO ingredients (name, unit, stock_quantity, reorder_level, unit_cost, supplier, notes)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(insert_test, (test_name, 'kg', 15.0, 8.0, 3.50, 'Test Supplier', 'Test insert'))
        conn.commit()
        test_id = cursor.lastrowid
        print(f"✓ Test insert successful! New ID: {test_id}")

        # Clean up test record
        cursor.execute("DELETE FROM ingredients WHERE id = %s", (test_id,))
        conn.commit()
        print("✓ Test record cleaned up")
    except Exception as e:
        print(f"✗ Test insert failed: {e}")
        conn.rollback()

    print("\n" + "=" * 60)
    print("VERIFICATION COMPLETE")
    print("=" * 60)

finally:
    cursor.close()
    conn.close()
