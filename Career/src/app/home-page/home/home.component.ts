import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { HomeService } from 'src/app/service/home.service';
import { JobService } from 'src/app/service/job.service';
import { JobapplyService } from 'src/app/service/jobapply.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  countofjob:number=0;
  titleactive:string='';
  captionactive:string='';
  imageactive:string='';
countofcompany:number=0;
countofapply:number=0;
countofuser:number=0;
  constructor(public route:Router,public jobvac:JobService,public userservice:UserService,public home:HomeService,public jobapplyservice:JobapplyService,public company:CompanyService) { }

  createcontact:FormGroup=new FormGroup(
    {
      userName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone:new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{10}")]),
      message:new FormControl('',[Validators.required]),
    }
  )
  public myError = (controlName: string, errorName: string) =>{
    return this.createcontact.controls[controlName].hasError(errorName);
    }
  sendMessage(){
  
    const value = this.createcontact.value;
    console.log(value);
    this.home.createcontact(value);

  }

  ngOnInit(): void {
    this.getjob();
    this.getslider();
  }
  getjob(){
this.jobvac.getAllJobvacncycompany().subscribe((res:any)=>{
  this.jobvac.datajobvac=res;
  this.countofjob=this.jobvac.datajobvac.length;
})

this.company.getallcompany().subscribe((res:any)=>{
  this.company.data=res;
this.countofcompany=this.company.data.length;});



this.jobapplyservice.GetAllApplyJobClientCompany().subscribe((res:any)=>{
  this.jobapplyservice.dataclientComp=res;
  this.countofapply=this.jobapplyservice.dataclientComp.length;});
  this.userservice.GetAllClientEdu().subscribe((res:any)=>{
    this.userservice.dataedu=res;
    this.countofuser=  this.userservice.dataedu.length;
  })
}
getslider()
{
  this.home.getallSlider().subscribe((result:any)=>
  {this.home.slidedata=result;
  this.titleactive=this.home.slidedata[0].title;
  this.captionactive=this.home.slidedata[0].caption;
  this.imageactive=this.home.slidedata[0].imagePath;
  
  
  })

}

  joblist(){this.route.navigate(['joblist']);}
}
