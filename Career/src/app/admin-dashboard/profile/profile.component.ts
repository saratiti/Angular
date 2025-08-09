import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchValidator } from 'src/app/form-validators';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private route:Router, public admin:UserService) { }
  
  ngOnInit(): void {
    this.getclient();
 
    
  }
admin_Id:any=localStorage.getItem('loginid');
image:any=this.admin.display_image;

getclient(){
 this.admin.GetByclientId(this.admin_Id);
    }
  UpdateAdmin:FormGroup=new FormGroup({
    client_ID:new FormControl(),
    fname:new FormControl(this.admin.databyId[0].fname),
    lname:new FormControl(this.admin.databyId[0].lname),
    address:new FormControl(this.admin.databyId[0].address),
    birthOfDate:new FormControl(this.admin.databyId[0].birthOfDate),
    email:new FormControl(this.admin.databyId[0].email),
    phone:new FormControl(this.admin.databyId[0].phone),
    gender:new FormControl(this.admin.databyId[0].gender),
    imagename:new FormControl(this.admin.databyId[0].imagename),
   });
//fullName:string=this.admin.databyId[0].fname +' '  + this.admin.databyId[0].lname;
   changepassword:FormGroup=new FormGroup({
    currentPass:new FormControl('',[Validators.required]),
    newPass:new FormControl('', [ Validators.required, matchValidator('confirmPass')]),
    confirmPass:new FormControl('', [ Validators.required, matchValidator('newPass')])
  });
  public myError = (controlName: string, errorName: string) =>{
    return this.changepassword.controls[controlName].hasError(errorName);
    }
  

  changePass(){
    
  }
 
  profile(){
    this.route.navigate(['admin/profile'])

   } 
 
    company(){
    this.route.navigate(['admin/company'])

    }
    job(){ this.route.navigate(['admin/job']) }
    applyjob(){ this.route.navigate(['admin/applyjob'])}
 Report(){
  this.route.navigate(['admin/Report'])

 }
 Manage(){
  this.route.navigate(['admin/Manage'])

}
User()
{ 
   this.route.navigate(['admin/user'])

}
   login()
   {
    localStorage.removeItem('token');
 

    this.route.navigate(['auth/login'])

   }
   message()
   {
     this.route.navigate(['admin/message'])
   }


   Update()
   {  this.UpdateAdmin.controls['client_ID'].setValue(this.admin_Id);
      this.UpdateAdmin.controls['imagename'].setValue(this.image)

   const value = this.UpdateAdmin.value;
     this.admin.updateAdmin(value);

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
    this.admin.uploadAttachment(formData);
    }
}
