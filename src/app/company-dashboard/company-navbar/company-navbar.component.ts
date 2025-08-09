import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.css']
})
export class CompanyNavbarComponent implements OnInit {
  companyId:any=localStorage.getItem('loginid');
companyName:string='';
image:string='';
  constructor(public company:CompanyService) { }

  ngOnInit(): void {
    this.getByCompanyId();
  }
  getByCompanyId(){
this.company.getByCompanyId(this.companyId).subscribe((res:any)=>{
  this.company.databyid=res;
  console.log(  this.company.databyid);
  
this.companyName=this.company.databyid[0].fullname;
this.image=this.company.databyid[0].logoImage;
})

  }
}
