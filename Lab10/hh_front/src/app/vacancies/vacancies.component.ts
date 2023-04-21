import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {
  vacancies: Vacancy[] = [];
  constructor(private service: VacancyService){}
  ngOnInit(): void{
    this.service.getVacancies().subscribe((vacancies)=>{
      this.vacancies = vacancies
    })
  }
}
