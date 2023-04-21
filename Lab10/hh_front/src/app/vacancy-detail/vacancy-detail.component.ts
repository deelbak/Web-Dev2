import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
  vacancy: Vacancy
  constructor( private route: ActivatedRoute, private service: VacancyService) {
    this.vacancy = {} as Vacancy;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.service.getVacancy(id).subscribe((vacancy) => {
          this.vacancy = vacancy;
        })
      }
    });
  }
}
