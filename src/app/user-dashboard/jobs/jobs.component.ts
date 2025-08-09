import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private route:Router,public mess:UserService) { }
  userid :any=localStorage.getItem('loginid');

  ngOnInit(): void {
    this.getallmessage();
    }
  
    getallmessage(){
      this.mess.getallapplyjobday(this.userid,100).subscribe((res:any)=>{
        this.mess.message=res;
  })}


  today(){
    this.mess.getallapplyjobday(this.userid,0).subscribe((res:any)=>{
 this.mess.message=res;
})}
  
yesterday(){
  this.mess.getallapplyjobday(this.userid,1).subscribe((res:any)=>{
    this.mess.message=res;
   })

}
sevenday(){
  this.mess.getallapplyjobday(this.userid,7).subscribe((res:any)=>{
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
