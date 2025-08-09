import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-companyjob',
  templateUrl: './companyjob.component.html',
  styleUrls: ['./companyjob.component.css']
})
export class CompanyjobComponent implements OnInit {

  countofjob:number=0;
  constructor(public route:Router,public jobvac:JobService) { }

  ngOnInit(): void {
    this.getall()
  }
getall(){
  this.jobvac.getByCompanyId(this.jobvac.comid).subscribe((res:any)=>{
    this.jobvac.data=res;
    this.countofjob=this.jobvac.data.length;
  })};
  apply(id:number){

    this.jobvac.jobid=id;
    this.route.navigate(['user/userapply']);


  }
  Home(){this.route.navigate(['']);}
}
