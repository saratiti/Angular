import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  constructor(private route:Router,public jobservice:JobService) { }
  searchTwoDate:FormGroup=new FormGroup({
    DateFrom:new FormControl(),
    DateTo:new FormControl(),
   
   });

   searchDate()
   {  
    
     const value = this.searchTwoDate.value;
 
     this.jobservice.SearchBetweenToDate(value).subscribe((res:any)=>{
      this.jobservice.data=res;
     })
   }
  ngOnInit(): void {
this.getAll();
  }
  getAll(){
    this.jobservice.getAllJobvacncycompany().subscribe((res:any)=>{
      this.jobservice.data=res;
  
    })

  }
  
  profile(){this.route.navigate(['admin/profile']) } 
 
    company(){ this.route.navigate(['admin/company'])}
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


