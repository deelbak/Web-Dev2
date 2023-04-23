from django.http.response import JsonResponse
from .models import Product,Category

# Create your views here.

def products(request):
    all_products = Product.objects.all()
    products_json = [p.to_json() for p in all_products]
    return JsonResponse(products_json, safe=False)
#
# def product_by_id(request, id):
#     product = Product.objects.filter(id = id).first()
#     return JsonResponse(product.to_json(), safe=False)

def categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_by_id(request, id):
    category = Category.objects.filter(id = id).first()
    return JsonResponse(category.to_json(), safe=False)

def category_products(request, id):
    products = Product.objects.filter(id = id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json,safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse(product.to_json())

