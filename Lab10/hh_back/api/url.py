from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.get_companies),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIListView.as_view()),
    path('vacancies/', views.VacanciesAPIListView.as_view()),
    path('vacancies/<int:id>/', views.VacancyAPIListView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIListView.as_view())
]