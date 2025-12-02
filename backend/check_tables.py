import pymysql

conn = pymysql.connect(host='localhost', user='root', password='', database='databrew')

try:
    cursor = conn.cursor()

    print("="*60)
    print("DATABASE TABLE CHECK")
    print("="*60)

    # Check ingredients
    cursor.execute("SHOW TABLES LIKE 'ingredients'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM ingredients")
        count = cursor.fetchone()[0]
        print(f"\n[OK] ingredients table: {count} records")

        cursor.execute("DESCRIBE ingredients")
        print("\nColumns:")
        for col in cursor.fetchall():
            print(f"  {col[0]} ({col[1]})")
    else:
        print("\n[ERROR] ingredients table NOT FOUND!")

    # Check products
    cursor.execute("SHOW TABLES LIKE 'products'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM products")
        count = cursor.fetchone()[0]
        print(f"\n[OK] products table: {count} records")
    else:
        print("\n[ERROR] products table NOT FOUND!")

    # Check product_ingredients
    cursor.execute("SHOW TABLES LIKE 'product_ingredients'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM product_ingredients")
        count = cursor.fetchone()[0]
        print(f"\n[OK] product_ingredients table: {count} records")
    else:
        print("\n[ERROR] product_ingredients table NOT FOUND!")

    # Test insert
    print("\n" + "="*60)
    print("TESTING INSERT")
    print("="*60)

    test_name = "Quick Test Insert"
    try:
        cursor.execute(
            "INSERT INTO ingredients (name, unit, stock_quantity, reorder_level, unit_cost, supplier, notes) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (test_name, 'kg', 10.0, 5.0, 2.5, 'Test', 'Testing')
        )
        conn.commit()
        new_id = cursor.lastrowid
        print(f"[OK] Insert successful! New ID: {new_id}")

        # Clean up
        cursor.execute("DELETE FROM ingredients WHERE id = %s", (new_id,))
        conn.commit()
        print("[OK] Test record deleted")
    except Exception as e:
        print(f"[ERROR] Insert failed: {e}")
        conn.rollback()

    print("\n" + "="*60)
    print("ALL CHECKS COMPLETE")
    print("="*60)

finally:
    cursor.close()
    conn.close()
