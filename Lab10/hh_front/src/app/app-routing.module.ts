import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyTopTenComponent } from './vacancy-top-ten/vacancy-top-ten.component';
import { HomeComponent } from './home/home.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetailComponent},
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent },
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'vacancies/:id', component: VacancyDetailComponent },
  { path: 'top_ten', component: VacancyTopTenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
