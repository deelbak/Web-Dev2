import { Component } from '@angular/core';
import { Company } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  company: Company;
  constructor( private route: ActivatedRoute, private service: CompanyService) {
    this.company = {} as Company;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.service.getCompany(id).subscribe((company) => {
          this.company = company;
        })
      }
    });
  }
}
