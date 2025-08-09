import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  date1:Date=new Date();
  userImage=this.register.display_image;
compImage=this.regCompany.display_image;
  userregister:FormGroup=new FormGroup({
    fname:new FormControl('', [ Validators.required]),
    lname:new FormControl('', [ Validators.required]),
    birthOfDate:new FormControl(),
    email:new FormControl('', [ Validators.required, Validators.email]),
    phone:new FormControl('',[ Validators.pattern("[0-9 ]{10}")]),
    userName:new FormControl('', [ Validators.required]),
    c_Password:new FormControl('', [ Validators.required]),
    roleName:new FormControl('client'),
    imagename:new FormControl(),
  });


  companyregister:FormGroup=new FormGroup({
  fullname:new FormControl('', [ Validators.required]),
  userName:new FormControl('', [ Validators.required]),
  email:new FormControl('', [ Validators.required, Validators.email]),
  companyUrl:new FormControl(),
    password:new FormControl('', [ Validators.required]),
    phone:new FormControl('',[ Validators.pattern("[0-9 ]{10}")]),
    roleName:new FormControl('company'),
    registerDate:new FormControl(),
    logoImage:new FormControl()
  });
  constructor(public route:Router,public register:UserService,public regCompany :CompanyService) { }

  ngOnInit(): void {
  }
  login(){this.route.navigate(['auth/login']);}



public myError = (controlName: string, errorName: string) =>{
  return this.userregister.controls[controlName].hasError(errorName);
  }
  public myError1 = (controlName: string, errorName: string) =>{
    return this.companyregister.controls[controlName].hasError(errorName);
    }
  

  signupuser(){
    this.userregister.controls['roleName'].setValue('client');
    this.userregister.controls['imagename'].setValue(this.userImage);

 const value=this.userregister.value;

 this.register.createClient(value);
 this.route.navigate(['auth/login']);


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
    // //file --> اسم الفيلد اللي الداتا رح تحتويه 
    formData.append('file', fileToUpload, fileToUpload.name);
    this.register.uploadAttachment(formData);
    }



    uploadFile1(event:any) {
      let files = event.target.files;
      if (files.length === 0) {
       console.log("No File Selected");
     return;
      }
      let fileToUpload = <File>files[0];
          console.log(fileToUpload);
  
      const formData = new FormData();
      // //file --> اسم الفيلد اللي الداتا رح تحتويه 
      formData.append('file', fileToUpload, fileToUpload.name);
      this.regCompany.uploadAttachment(formData);
      }


  signupcompany(){

    this.companyregister.controls['roleName'].setValue('company')
    this.companyregister.controls['registerDate'].setValue(this.date1)
    this.userregister.controls['logoImage'].setValue(this.compImage);

    console.log(this.compImage);
    
 const value=this.companyregister.value;

 this.regCompany.createcompany(value);
 this.route.navigate(['auth/login']);
  }
}
