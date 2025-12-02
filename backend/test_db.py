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

    # Check ingredients table structure
    cursor.execute('DESCRIBE ingredients')
    print('=== Ingredients table structure ===')
    for row in cursor.fetchall():
        print(row)

    # Check count
    cursor.execute('SELECT COUNT(*) FROM ingredients')
    count = cursor.fetchone()[0]
    print(f'\nTotal ingredients: {count}')

    # Check products table
    cursor.execute('SELECT COUNT(*) FROM products')
    prod_count = cursor.fetchone()[0]
    print(f'Total products: {prod_count}')

    # Check product_ingredients table
    cursor.execute('SELECT COUNT(*) FROM product_ingredients')
    pi_count = cursor.fetchone()[0]
    print(f'Total product_ingredients: {pi_count}')

    # Try a simple test insert
    try:
        cursor.execute("""
            INSERT INTO ingredients (name, unit, stock_quantity, reorder_level, unit_cost, supplier, notes)
            VALUES ('Test Ingredient', 'kg', 10, 5, 1.50, 'Test Supplier', 'Test note')
        """)
        conn.commit()
        print('\n✓ Test insert successful!')

        # Delete test record
        cursor.execute("DELETE FROM ingredients WHERE name = 'Test Ingredient'")
        conn.commit()
        print('✓ Test delete successful!')

    except Exception as e:
        print(f'\n✗ Test insert failed: {e}')
        conn.rollback()

finally:
    conn.close()
