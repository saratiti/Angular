import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  userid :any=localStorage.getItem('loginid');
  userimage='';
  constructor(private route:Router,public home :HomeService) { }

  ngOnInit(): void {
  }


  


  createTest:FormGroup=new FormGroup({
    nickName:new FormControl(),
    message:new FormControl(),
    imagePath:new FormControl(),
   });

   uploadFile(event:any) {
    let files = event.target.files;
    if (files.length === 0) {
     console.log("No File Selected");
   return;
    }
    let fileToUpload = <File>files[0];
       
    const formData = new FormData();
    // //file --> اسم الفيلد اللي الداتا رح تحتويه 
    formData.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadAttachmentT(formData).subscribe((data:any)=>{
      console.log(data.imagePath);
      
     this.userimage=data.imagePath;
      
        })
    }


   create(){
   
    this.createTest.controls['imagePath'].setValue(this.userimage.toString());
    const value = this.createTest.value;
    console.log(value);
    
      this.home.createTesti(value);


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
