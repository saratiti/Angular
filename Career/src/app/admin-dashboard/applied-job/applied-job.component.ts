import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { JobapplyService } from 'src/app/service/jobapply.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {

  constructor(private route:Router,public jobapplyservice:JobapplyService,public spiner:NgxSpinnerService,private toastr:ToastrService) { }
count:number=0;
rejcount:number=0;
accpetcount:number=0;


searchTwoDate:FormGroup=new FormGroup({
  DateFrom:new FormControl(),
  DateTo:new FormControl(),
 
 });


 searchDate()
 {  
  
   const value = this.searchTwoDate.value;

   this.jobapplyservice.searchDateadmin(value);
 }
  ngOnInit(): void {
    this.getall();

  }
 getall(){
  this.jobapplyservice.GetAllApplyJobClientCompany().subscribe((res:any)=>{
    this.jobapplyservice.dataclientComp=res;
    this.count=this.jobapplyservice.dataclientComp.length;

    this.spiner.show();
    this.toastr.success('Data Retrive !!');
    // this.refresh.next(new Date().getTime());
    this.spiner.hide();
for(let i = 0; i < this.count; i++)
{
if (   this.jobapplyservice.dataclientComp[i].stutus.indexOf('Accept')>=0 ){this.accpetcount++;}
else if (    this.jobapplyservice.dataclientComp[i].stutus.indexOf('reject')>=0 ){this.rejcount++;}
}

}, err => {
  this.spiner.hide();
  this.toastr.error('Error ');
 
 }
  );
 this.count=this.jobapplyservice.dataclientComp.length;
 }
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
