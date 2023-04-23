from django.urls import path

from api import views


urlpatterns = [
    # path('companies', views.company_list1),
    # path('companies/<int:company_id>', views.company_detail1),
    # path('companies/<int:company_id>/vacancies', views.VacancyListAPIView.as_view()),
    # path('vacancies', views.VacancyListAPIView.as_view()),
    # path('vacancies/<int:vacancy_id>', views.Vacancy_detail),
    path('companies', views.company_list),
    path('companies/<int:company_id>', views.Company_detail),
    path('companies/<int:company_id>/vacancies', views.vacancies_of_company),
    path('vacancies', views.Vacancy_list),
    path('vacancies/<int:vacancy_id>', views.Vacancy_detail),
]