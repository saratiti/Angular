import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  userid :any=localStorage.getItem('loginid');
  constructor(private route:Router,public mess:UserService) { }

  ngOnInit(): void {
  this.getallmessage();
  }

  getallmessage(){
this.mess.getallMessage(this.userid).subscribe((res:any)=>{
this.mess.message=res;
})

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
