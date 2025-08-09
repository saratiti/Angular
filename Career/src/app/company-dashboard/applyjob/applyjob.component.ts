import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobapplyService } from 'src/app/service/jobapply.service';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {

  constructor(private route:Router,public applysercive:JobapplyService) { }
  count:number=0;
  rejcount:number=0;
  accpetcount:number=0;
  searchTwoDate:FormGroup=new FormGroup({
    DateFrom:new FormControl(),
    DateTo:new FormControl(),
    Com_Id:new FormControl(),
   });
 companyId:any=localStorage.getItem('loginid');
  ngOnInit(): void {
    this.getall();
  }
  getall()
  {
this.applysercive.GetAllApplyJobClient(this.companyId);
this.count=this.applysercive.dataclient.length;
for(let i = 0; i < this.count; i++)
{
if (   this.applysercive.dataclient[i].stutus.indexOf('Accept')>=0 ){this.accpetcount++;}
else if (    this.applysercive.dataclient[i].stutus.indexOf('reject')>=0 ){this.rejcount++;}
}
  }
  profile(){this.route.navigate(['company/profile']);}
  manage(){this.route.navigate(['company/manage']);}
  managejob(){this.route.navigate(['company/managejob']);}
  postjob(){this.route.navigate(['company/postjob']);}
  appliedjob(){this.route.navigate(['company/applyjob']);}
  report(){this.route.navigate(['company/report']);}
  login(){ localStorage.removeItem('token');
 

  this.route.navigate(['auth/login'])}
  searchDate()
  {  
    this.searchTwoDate.controls['Com_Id'].setValue(parseInt(this.companyId));
  

    const value = this.searchTwoDate.value;

    this.applysercive.searchDate(value);
  }
}
