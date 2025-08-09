import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:Router,public userservice:UserService) { }
  count:number=0;
  ngOnInit(): void {
  this.getall();
  }
  getall(){
    this.userservice.GetAllClientEdu().subscribe((res:any)=>{
      this.userservice.dataedu=res;
      console.log(res);
      
      this.count=  this.userservice.dataedu.length;
    })
  }
  delete(id:number){
this.userservice.deleteuser(id);

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
   localStorage.removeItem('user');
 

    this.route.navigate(['auth/login'])

   }
   message()
   {
     this.route.navigate(['admin/message'])
   }
  }