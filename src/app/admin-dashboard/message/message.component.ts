import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public route:Router,public mess:HomeService) { }

  ngOnInit(): void {
    this.getallmessage();
  }
  getallmessage()
  {
    this.mess.getallcontact();
  }

  deletemessage(id:number)
  {
this.mess.deletecontact(id);
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
}
