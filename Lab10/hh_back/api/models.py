from django.db import models


# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    city = models.CharField(max_length=50, null=True)
    address = models.TextField(null=True)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.to_json()
        }