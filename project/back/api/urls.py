from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('products/', views.ProductListAPIView.as_view(), name='product_list'),
    path('products/<int:id>/', views.ProductDetailAPIView.as_view(), name='product_detail'),
    path('categories/', views.CategoryListAPIView.as_view(), name='category_list'),
    path('categories/<int:id>/', views.CategoryDetailAPIView.as_view(), name='category_detail'),
]