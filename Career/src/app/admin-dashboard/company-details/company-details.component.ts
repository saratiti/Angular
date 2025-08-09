import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private route:Router,public companyservice:CompanyService,public tostr:ToastrService) { }
  count:number=0;
  ngOnInit(): void {
this.getAll();


  }
  
  getAll(){
  this.companyservice.getallcompany().subscribe((res:any)=>{
    this.companyservice.data=res;
    this.count=this.companyservice.data.length;
  })

  }
  deletejob(id:number){}
  profile(){
    this.route.navigate(['admin/profile'])

   } 
 
    company(){
    this.route.navigate(['admin/company'])

    }
    job(){ this.route.navigate(['admin/job']) }
    applyjob(){ this.route.navigate(['admin/applyjob'])}
 Report(){
  this.route.navigate(['admin/Report'])

 }
 Manage(){
  this.route.navigate(['admin/Manage'])

}
User()
{ 
   this.route.navigate(['admin/user'])

}
   login()
   {
    localStorage.removeItem('token');
 

    this.route.navigate(['auth/login'])

   }
   message()
  {
    this.route.navigate(['admin/message'])
  }
}


