import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobapplyService } from 'src/app/service/jobapply.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-manage-candidate',
  templateUrl: './manage-candidate.component.html',
  styleUrls: ['./manage-candidate.component.css']
})
export class ManageCandidateComponent implements OnInit {

  constructor(private route:Router,private dialog:MatDialog, public jobservice:JobapplyService,public userservice:UserService) { }
  companyId:any=localStorage.getItem('loginid');
  ngOnInit(): void {
this.getall();
  }
getall(){
  this.jobservice.GetAllApplyJobClientmess(this.companyId);
  
}
  profile(){this.route.navigate(['company/profile']);}
  manage(){this.route.navigate(['company/manage']);}
  managejob(){this.route.navigate(['company/managejob']);}
  postjob(){this.route.navigate(['company/postjob']);}
  appliedjob(){this.route.navigate(['company/applyjob']);}
  report(){this.route.navigate(['company/report']);}
  login(){ localStorage.removeItem('token');
 this.route.navigate(['auth/login'])}

viewprofile(id:number,jobid:number){
console.log(jobid);

this.userservice.profileid=id;
this.userservice.applyid=jobid;
  this.route.navigate(['company/userprofile']);
  this.userservice.GetByclientId(this.userservice.profileid);
  
  this.userservice.GetEducationbyclientid(this.userservice.profileid).subscribe((res:any)=>{
    this.userservice.dataedubyid=res;
  }
  
  )
  
}

}
