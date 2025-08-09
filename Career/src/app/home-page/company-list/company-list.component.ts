import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/service/company.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(public route:Router,public company:CompanyService,public spiner:NgxSpinnerService,private toastr:ToastrService,private job:JobService) { }
 id:any=[];
count:number=0;
countofjob:any=[];
  ngOnInit(): void {
    this.getcompanywithjob();
  }
getcompanywithjob()
{ 
  this.company.getallcompany().subscribe((res:any)=>{
    this.company.data=res;
 this.count=this.company.data.length;
    this.spiner.show();
    this.toastr.success('Data Retrive !!');
    for(let i = 0; i < this.count; i++)
    {
      this.id[i]=this.company.data[i].company_ID;
      this.job.getByCompanyId(this.id[i]).subscribe((res:any)=>{
        this.job.comjob=res;
      this.countofjob[i]= this.job.comjob.length;
    })
    }
   
    this.spiner.hide();

    
}, err => {
  this.spiner.hide();
  this.toastr.error('Error ');
  }
  )

}

search:string ='';
  searchcompany(e:any){
 
    this.search=e.target.value;
    this.company.fullname=this.search;
    this.company.searchByCompanyName(this.company.fullname).subscribe((res:any)=>
  {
  this.company.data=res;
    })
  }
  getcompanyName(){


    this.company.searchByCompanyName(this.company.fullname).subscribe((res:any)=>
    {
      this.company.data=res;
   
    })
  

    
  }

  Home(){this.route.navigate(['']);}

  gotojob(id:number){
    this.job.comid=id;
this.route.navigate(['comjob'])

  }
}
