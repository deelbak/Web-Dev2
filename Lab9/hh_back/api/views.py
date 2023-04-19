from .models import Company, Vacancy
from django.http.response import JsonResponse


# Create your views here.
def get_companies(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)


def get_company(request, id):
    company = Company.objects.filter(id=id).first()
    return JsonResponse(company.to_json(), safe=False)


def get_company_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancy(request, id):
    vacancy = Vacancy.objects.filter(id=id).first()
    return JsonResponse(vacancy.to_json(), safe=False)


def get_top_ten_vacancies(request):
    top = Vacancy.objects.order_by('-salary')[:10]
    top_json = [t.to_json() for t in top]
    return JsonResponse(top_json, safe=False)