import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private route:Router,public user:UserService) { }
  
  userid :any=localStorage.getItem('loginid');
  Major:string=this.user.dataedubyid[0].major;
  University:string=this.user.dataedubyid[0].university;
  Degree:string=this.user.dataedubyid[0].degree;
  Gpa:number=this.user.dataedubyid[0].gpa;
  education_ID:number=this.user.dataedubyid[0].education_ID;
 cv:string='';
//  =this.user.cv;
  addeducation:FormGroup=new FormGroup({
    major:new FormControl(),
    university:new FormControl(),
    degree:new FormControl(),
    gpa:new FormControl(),
    client_ID:new FormControl(),
    uploadcv:new FormControl(),
  
   });
  updateeducation:FormGroup=new FormGroup({
    education_ID:new FormControl(),
    major:new FormControl(this.user.dataedubyid[0].major),
    university:new FormControl(this.user.dataedubyid[0].university),
    degree:new FormControl(this.user.dataedubyid[0].degree),
    gpa:new FormControl(this.user.dataedubyid[0].gpa),
    client_ID:new FormControl(),
    uploadcv:new FormControl(),
    // uploadcertificate:new FormControl(),
    // achivement:new FormControl()
   });
 
getedu()
{
this.user.GetEducationbyclientid(this.userid).subscribe((res:any)=>{
  this.user.dataedubyid=res;
})
}
addedu(){
  this.addeducation.controls['client_ID'].setValue(this.userid)
  this.updateeducation.controls['uploadcv'].setValue(this.cv.toString())

  const value=this.addeducation.value;
console.log(value);

  this.user.createEdu(value);
}
updateedu(){
  this.updateeducation.controls['client_ID'].setValue(this.userid)
  this.updateeducation.controls['education_ID'].setValue(this.user.dataedubyid[0].education_ID)
  this.updateeducation.controls['uploadcv'].setValue(this.cv.toString())

const value=this.updateeducation.value;

this.user.UpdateEdu(value);
console.log(value);

}

uploadFile(event:any) {
  let files = event.target.files;
  if (files.length === 0) {
   console.log("No File Selected");
 return;
  }
  let fileToUpload = <File>files[0];
      console.log(fileToUpload);
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  this.user.Uploadcv(formData).subscribe((data:any)=>{
this.cv=data.uploadcv;
      });

  
  }

delete()
{
this.user.deleteedu(this.user.dataedubyid[0].education_ID);

}
  ngOnInit(): void {
    this.getedu();
  }
  profile(){
    this.route.navigate(['user/profile'])

  }
  job(){
    this.route.navigate(['user/jobvacancy'])

  }
message(){this.route.navigate(['user/massage']);}

  applyjob(){
    this.route.navigate(['user/job'])

  }
  logout(){
    localStorage.removeItem('token');
 

    this.route.navigate(['auth/login'])

  }
  password(){
    this.route.navigate(['user/password'])

  }
  testimonial(){
    this.route.navigate(['user/testimonial'])

  }
  education(){
    this.route.navigate(['user/education'])

  }
}
