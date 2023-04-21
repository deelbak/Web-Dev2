import { Component } from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  companies: Company[] = [];
  constructor (private service: CompanyService){}
  ngOnInit(): void {
    this.service.getCompanies().subscribe((companies)=>{
      this.companies = companies
    })
    console.log(this.companies)
}
}
