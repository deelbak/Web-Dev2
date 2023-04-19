from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', views.products),
    path('products/<int:id>/', views.product_by_id),
    path('categories/', views.categories),
    path('categories/<int:id>/', views.category_by_id),
    path('categories/<int:id>/products/', views.category_products),
]