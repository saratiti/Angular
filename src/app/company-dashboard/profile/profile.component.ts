import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchValidator } from 'src/app/form-validators';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router,public companyservice:CompanyService) { }
  companyId:any=localStorage.getItem('loginid');
 data:any[]=[{}];
 image:any=this.companyservice.display_image;
  updatecompany:FormGroup =new FormGroup({
    company_ID:new FormControl(this.companyservice.databyid[0].company_ID),
    fullname:new FormControl(this.companyservice.databyid[0].fullname),
    email:new FormControl(this.companyservice.databyid[0].email),
    phone:new FormControl(this.companyservice.databyid[0].phone),
    address:new FormControl(this.companyservice.databyid[0].address),
    companyUrl:new FormControl(this.companyservice.databyid[0].companyUrl),
    logoImage:new FormControl(this.companyservice.databyid[0].logoImage),
  });
  // changepassword:FormGroup=new FormGroup({
  //   currentPass:new FormControl('',[Validators.required]),
  //   newPass:new FormControl('', [ Validators.required, matchValidator('confirmPass')]),
  //   confirmPass:new FormControl('', [ Validators.required, matchValidator('newPass')])
  // });

update(){
   
  this.updatecompany.controls['company_ID'].setValue(this.companyId);
  this.updatecompany.controls['logoImage'].setValue(this.image)

  const value = this.updatecompany.value;
  console.log(value);
  
  this.companyservice.updatecomapny(value);

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
  this.companyservice.uploadAttachment(formData);
  }

changePass(){
}

getByCompanyId(){
  this.companyservice.getByCompanyId(this.companyId).subscribe((res:any)=>{
    this.companyservice.databyid=res;

  })
  
    }

// public myError = (controlName: string, errorName: string) =>{
//   return this.changepassword.controls[controlName].hasError(errorName);
//   }
  ngOnInit(): void {
    this.getByCompanyId();
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
