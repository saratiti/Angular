import { Component, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';


@Component({
  selector: 'app-managejob',
  templateUrl: './managejob.component.html',
  styleUrls: ['./managejob.component.css']
})
export class ManagejobComponent implements OnInit {
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog! :TemplateRef<any>

  // companyId:number=1;
  // postdate : Date = new Date();

  // updateJob:FormGroup=new FormGroup({
  //   jobvacancy_ID:new FormControl(),
  //   joptitle:new FormControl(),
  //   salary: new FormControl(),
  //  jobdescription: new FormControl(),
  // opening:new FormControl(),
  // joblocation: new FormControl(),
  // applaydate: new FormControl(),
  // lastdate: new FormControl(),
  // postingdate:new FormControl(),
  // company_ID: new FormControl(),

  //  });

  constructor(private route:Router, public jobservice:JobService,public dialog:MatDialog) { }
  @Output() jobId=0;
  search:string ='';
  companyId:any=localStorage.getItem('loginid');
  // jobId:number=0;
  ngOnInit(): void {
    this.getall()
  }
getall(){
  this.jobservice.getByCompanyId(this.companyId).subscribe((res:any)=>{
    this.jobservice.data=res;
  })
}
  profile(){this.route.navigate(['company/profile']);}
  manage(){this.route.navigate(['company/manage']);}
  managejob(){this.route.navigate(['company/managejob']);}
  postjob(){this.route.navigate(['company/postjob']);}
  appliedjob(){this.route.navigate(['company/applyjob']);}
  report(){this.route.navigate(['company/report']);}
  login(){localStorage.removeItem('token');
 

  this.route.navigate(['auth/login'])}

  updatejob(id:number)
  {
    this.jobId=id;
   this.route.navigate(['company/updatejob'])
  console.log(this.jobId);
  
  }
  deletejob(id:number) {
  console.log(id);
  
this.jobservice.DeleteJobVacancy(id);
   }
  viewjob(id:number) {}

  searchjob(e:any){
    // console.log( this.jobservice.data);
    this.search=e.target.value;
    this.jobservice.searchdata[0].company_ID=this.companyId;
    this.jobservice.searchdata[0].joptitle=this.search;

console.log( this.jobservice.searchdata[0]);


    this.jobservice.getalljobbyjobTiltecompantid(this.jobservice.searchdata[0]).subscribe((res:any)=>{
      this.jobservice.data=res;
    })
  }
  getjobtitle(){


    this.jobservice.getalljobbyjobTiltecompantid(this.jobservice.searchdata[0]).subscribe((res:any)=>{
      this.jobservice.data=res;
    })
  
    console.log(this.jobservice.data);
    
  }
}
