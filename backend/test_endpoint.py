#!/usr/bin/env python3
import requests
import time

time.sleep(2)

try:
    response = requests.get('http://127.0.0.1:8000/products/categories', timeout=5)
    print(f'Status: {response.status_code}')
    print(f'Response: {response.json()}')
except Exception as e:
    print(f'Error: {e}')
