import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { HomeComponent } from './home/home.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { VacancyTopTenComponent } from './vacancy-top-ten/vacancy-top-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CompanyVacanciesComponent,
    HomeComponent,
    VacanciesComponent,
    VacancyDetailComponent,
    VacancyTopTenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
