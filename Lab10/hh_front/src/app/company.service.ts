import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client:HttpClient) { }
  getCompanies():  Observable<Company[]>{
    let val = this.client.get<Company[]>(`http://127.0.0.1:8000/api/companies/`);
    return val;
  }
  getCompany(id: number): Observable<Company>{
    return this.client.get<Company>(`http://127.0.0.1:8000/api/companies/${id}/`);
  }
  getCompanyVacancies(id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies/`);
  }
}
