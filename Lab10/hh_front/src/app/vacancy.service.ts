import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private client:HttpClient) { }
  getVacancies():  Observable<Vacancy[]>{
    let val = this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/vacancies/`);
    return val;
  }
  getVacancy(id: number): Observable<Vacancy>{
    return this.client.get<Vacancy>(`http://127.0.0.1:8000/api/vacancies/${id}/`);
  }
  getTopTenVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/vacancies/top_ten/`);
  }
}
