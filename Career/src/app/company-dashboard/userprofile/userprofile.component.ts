import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobapplyService } from 'src/app/service/jobapply.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private route:Router,public userservice:UserService,public apply:JobapplyService ) { }
resDate :Date=new Date();
  ngOnInit(): void {

    
  }

  Message:FormGroup=new FormGroup({
    client_ID:new FormControl(),
    message:new FormControl(),
    stutus:new FormControl(),
    // jobVacancy_ID:new FormControl(),
    applyjoB_ID:new FormControl(),
    responsedate:new FormControl(),
    // applydate:new FormControl(),
  })
sendMessage(){
  this.Message.controls['client_ID'].setValue(this.userservice.profileid)
  this.Message.controls['applyjoB_ID'].setValue(this.userservice.applyid)
  this.Message.controls['responsedate'].setValue(this.resDate)

  const value = this.Message.value;
console.log(value);

  this.apply.update(value);
this.route.navigate(['company/manage'])

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
