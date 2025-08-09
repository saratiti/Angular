import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-vacancy',
  templateUrl: './job-vacancy.component.html',
  styleUrls: ['./job-vacancy.component.css']
})
export class JobVacancyComponent implements OnInit {

  constructor(private route :Router,public jobservice:JobService) { }
  userid :any=localStorage.getItem('loginid');
  search:string ='';
  searchjob(e:any){
    // console.log( this.jobservice.data);
    this.search=e.target.value;
    this.jobservice.title=this.search;


    this.jobservice.getalljobbyjobTilte(  this.jobservice.title).subscribe((res:any)=>{
      this.jobservice.data=res;
    })
  }
  getjobtitle(){


    this.jobservice.getalljobbyjobTilte(this.jobservice.title).subscribe((res:any)=>{
      this.jobservice.data=res;
    })
  

    
  }




  ngOnInit(): void {
    this.getAll();
      }
      getAll(){
        this.jobservice.getAllJobvacncycompany().subscribe((res:any)=>{
          this.jobservice.data=res;
      
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
apply(id :number){
  this.jobservice.jobid=id;
  this.route.navigate(['user/userapply'])

  
}
}
