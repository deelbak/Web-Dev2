from .models import Company, Vacancy
from django.http.response import JsonResponse
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView


# Create your views here.
def get_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_company(request, id):
    company = Company.objects.filter(id=id).first()
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data, safe=False)


class CompanyVacanciesAPIListView(APIView):
    def get(self, request, id):
        vacancies = Vacancy.objects.filter(company=id)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


class VacanciesAPIListView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


class VacancyAPIListView(APIView):
    def get(self, request, id):
        vacancies = Vacancy.objects.filter(id=id).first()
        serializer = VacancySerializer(vacancies)
        return JsonResponse(serializer.data, safe=False)


class TopTenVacanciesAPIListView(APIView):
    def get(self, request):
        top = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top, many=True)
        return JsonResponse(serializer.data, safe=False)