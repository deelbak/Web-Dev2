import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent {
  vacancies: Vacancy[] = [];
  constructor( private route: ActivatedRoute, private service: CompanyService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.service.getCompanyVacancies(id).subscribe((vacancies) => {
          this.vacancies = vacancies;
        })
      }
    });
  }
}
