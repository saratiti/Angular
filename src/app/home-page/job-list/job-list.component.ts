import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
countofjob:number=0;
  constructor(public route:Router,public jobvac:JobService) { }

  ngOnInit(): void {
    this.getjob();
  }

  search:string ='';
  searchjob(e:any){
 
    this.search=e.target.value;
    this.jobvac.title=this.search;


    this.jobvac.getalljobbyjobTilte(this.jobvac.title).subscribe((res:any)=>{
      this.jobvac.datajobvac=res;
    })
  }
  getjobtitle(){


    this.jobvac.getalljobbyjobTilte(this.jobvac.title).subscribe((res:any)=>{
      this.jobvac.datajobvac=res;
    })
  

    
  }





  getjob(){
this.jobvac.getAllJobvacncycompany().subscribe((res:any)=>{
  this.jobvac.datajobvac=res;
  this.countofjob=this.jobvac.datajobvac.length;
})

  }
  Home(){this.route.navigate(['']);}
}
