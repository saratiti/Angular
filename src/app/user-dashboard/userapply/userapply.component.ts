import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { JobapplyService } from 'src/app/service/jobapply.service';

@Component({
  selector: 'app-userapply',
  templateUrl: './userapply.component.html',
  styleUrls: ['./userapply.component.css']
})
export class UserapplyComponent implements OnInit {
  userid :any=localStorage.getItem('loginid');

  constructor(private route :Router,public jobservice:JobService,public apply:JobapplyService) { }
  applyjob:FormGroup=new FormGroup({
    jobVacancy_ID:new FormControl(),
    uploadcv:new FormControl(),
    applydate:new FormControl(),
    client_ID:new FormControl(),
   });
day:Date=new Date();
cv:string='';
  ngOnInit(): void {

  }

  upload(event:any) {
    let files = event.target.files;
    if (files.length === 0) {
     console.log("No File Selected");
   return;
    }
    let fileToUpload = <File>files[0];
    
    const formData = new FormData();

    formData.append('file', fileToUpload, fileToUpload.name);

    this.apply.Uploadcv(formData).subscribe((res:any)=>{
this.cv=res.uploadcv;
console.log(this.cv);

    })
;


    
 
    }
    save(){

      this.applyjob.controls['client_ID'].setValue(this.userid);
      this.applyjob.controls['jobVacancy_ID'].setValue( this.jobservice.jobid);
      this.applyjob.controls['applydate'].setValue(this.day);
     this.applyjob.controls['uploadcv'].setValue(this.cv.toString())
  
      const value = this.applyjob.value;
      console.log( value);
      
  this.apply.create(value);
      this.route.navigate(['user/jobvacancy'])
     
    }
}
