import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  userid :any=localStorage.getItem('loginid');
  constructor(private route :Router) { }

  ngOnInit(): void {
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
