import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid :any=localStorage.getItem('loginid');
  constructor(private route:Router,public client:UserService ) { }
  UpdateAdmin:FormGroup=new FormGroup({
    client_ID:new FormControl(),
    fname:new FormControl(this.client.databyId[0].fname),
    lname:new FormControl(this.client.databyId[0].lname),
    address:new FormControl(this.client.databyId[0].address),
    birthOfDate:new FormControl(this.client.databyId[0].birthOfDate),
    email:new FormControl(this.client.databyId[0].email),
    phone:new FormControl(this.client.databyId[0].phone),
    gender:new FormControl(this.client.databyId[0].gender),
    imagename:new FormControl(),
   });
   image:any;
//  public myError = (controlName: string, errorName: string) =>{
//   return this.UpdateAdmin.controls[controlName].hasError(errorName);
//   }
 Update(){
  this.UpdateAdmin.controls['client_ID'].setValue(this.userid);
  this.UpdateAdmin.controls['imagename'].setValue(this.image);
  const value = this.UpdateAdmin.value;
  console.log(value);
  
  this.client.updateClient(value);


 }
//  uploadFile(files:any){
//   // let files = event.target.files;
//   if(files.length == 0){
//     return;
//   }
//   let fileToUpload = <File>files[0];
//   const formData = new FormData();
  
//   formData.append('file',fileToUpload, fileToUpload.name);
//   this.client.uploadAttachment(formData);
//   }


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

    this.client.uploadAttachment(formData);
    }





  getclient(){
    this.client.GetByclientId(this.userid);
       }
  ngOnInit(): void {
    this.getclient();
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
