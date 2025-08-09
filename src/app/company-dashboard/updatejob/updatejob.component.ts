import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { ManagejobComponent } from '../managejob/managejob.component';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {
  companyId:any=localStorage.getItem('loginid');
  postdate : Date = new Date();

  constructor(private route:Router,public job:JobService) { }
  
  updateJob:FormGroup=new FormGroup({
    jobvacancy_ID:new FormControl(),
    joptitle:new FormControl(),
    salary: new FormControl(),
   jobdescription: new FormControl(),
  opening:new FormControl(),
  joblocation: new FormControl(),
  applaydate: new FormControl(),
  lastdate: new FormControl(),
  postingdate:new FormControl(),
  company_ID: new FormControl(),

   });
   
  ngOnInit(): void {
  }
  update(){
     this.updateJob.controls['jobvacancy_ID'].setValue(5)
    this.updateJob.controls['company_ID'].setValue(this.companyId)
    this.updateJob.controls['postingdate'].setValue(this.postdate)
    const value = this.updateJob.value;
    console.log( this.updateJob.controls['jobvacancy_ID'].value);
    this.job.Updatejob(value);

  }
  profile(){this.route.navigate(['company/profile']);}
  manage(){this.route.navigate(['company/manage']);}
  managejob(){this.route.navigate(['company/managejob']);}
  postjob(){this.route.navigate(['company/postjob']);}
  appliedjob(){this.route.navigate(['company/applyjob']);}
  report(){this.route.navigate(['company/report']);}
  login(){localStorage.removeItem('token');
 

  this.route.navigate(['auth/login'])}
}
