import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  companyId:any=localStorage.getItem('loginid');
  postdate : Date = new Date();

  constructor(private route:Router,public job:JobService) { }

  createJob:FormGroup=new FormGroup({
    joptitle:new FormControl('',[Validators.required]),
    salary: new FormControl('',[Validators.required]),
   jobdescription: new FormControl('',[Validators.required]),
  opening:new FormControl('',[Validators.required]),
  joblocation: new FormControl('',[Validators.required]),
  applaydate: new FormControl([Validators.required]),
  lastdate: new FormControl([Validators.required]),
  postingdate:new FormControl([Validators.required]),
  company_ID: new FormControl([Validators.required]),

   });
   public myError = (controlName: string, errorName: string) =>{
    return this.createJob.controls[controlName].hasError(errorName);
    }
  ngOnInit(): void {
  }
  profile(){this.route.navigate(['company/profile']);}
  manage(){this.route.navigate(['company/manage']);}
  managejob(){this.route.navigate(['company/managejob']);}
  postjob(){this.route.navigate(['company/postjob']);}
  appliedjob(){this.route.navigate(['company/applyjob']);}
  report(){this.route.navigate(['company/report']);}
  login(){localStorage.removeItem('token');
 

  this.route.navigate(['auth/login'])}

  postJob()
  {
 
    this.createJob.controls['company_ID'].setValue(this.companyId);
    this.createJob.controls['postingdate'].setValue(this.postdate);
    const value = this.createJob.value;
console.log(value);

    this.job.createjob(value);

  }
}
