#!/usr/bin/env python3
"""Test fresh import of the app"""
import sys
import importlib

# Force reload
if 'app.main' in sys.modules:
    del sys.modules['app.main']
if 'app' in sys.modules:
    del sys.modules['app']

from app.main import app

# Check routes
routes = [r.path for r in app.routes if 'api' in r.path]
print("API Routes found:")
for route in routes:
    print(f"  - {route}")

# Test the endpoint
from fastapi.testclient import TestClient
client = TestClient(app)

print("\nTesting /api/product-categories:")
response = client.get("/api/product-categories")
print(f"Status: {response.status_code}")
print(f"Response: {response.json()}")
