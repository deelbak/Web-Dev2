import os
import django



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shopback.settings')
django.setup()
import json
from api.models import Category, Product
with open('data.json') as f:
    data = json.load(f)

# Create categories
categories = []
for category_data in data['categories']:
    category = Category(name=category_data['name'])
    categories.append(category)
Category.objects.bulk_create(categories)

# Create products
products = []
for product_data in data['products']:
    category_name = product_data.pop('category')
    category = Category.objects.get(name=category_name)
    product = Product(category=category, **product_data)
    products.append(product)
Product.objects.bulk_create(products)
