import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  data:any[]=[{}];
  countofjob:any[]=[{}];
  datajobvac:any[]=[{}];
  searchdata:any[]=[{
    "joptitle": "",
    "company_ID": 0
  }];
  title:string='';
  jobid:number=0;
  comjob:any[]=[{}];
comid:number=0;
// searchdata:any[]=[{}];
  constructor(private http:HttpClient,public spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  getAllJobvacncy(){
    return this.http.get('https://localhost:44391/api/Jobvacncy/GetAllJobVacancy');

  }
  getByCompanyId(companyId:number){
    return this.http.get('https://localhost:44391/api/Jobvacncy/getalljobbycompanyId/'+companyId);
    
  }
// get job with company
  getAllJobvacncycompany(){
    return this.http.get('https://localhost:44391/api/Jobvacncy/GetAllJobVacancyCompany');

  }
  // search by title
  getalljobbyjobTilte(title:string)
  {
    return this.http.get('https://localhost:44391/api/Jobvacncy/getalljobbyjobTilte/'+title);

  }
  //serach two date 
  SearchBetweenToDate(period:any)
  {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.post('https://localhost:44391/api/Jobvacncy/SearchBetweenToDate/',period,requestOptions);


  }
  // search by title with company id
  getalljobbyjobTiltecompantid(search:any)
  {  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  search.company_ID=parseInt(search.company_ID);
    return this.http.post('https://localhost:44391/api/Jobvacncy/getbyJobTitleCompany/',search,requestOptions);

  }
  getbyJobId(id:number){
    return this.http.get('https://localhost:44391/api/Jobvacncy/getbyJobId/'+id);
  }
  //create job
  createjob(data:any){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    data.company_ID=parseInt(data.company_ID);
  
return this.http.post('https://localhost:44391/api/Jobvacncy/CreateJobVacancy',data,requestOptions).subscribe((result:any)=>{
  // console.log(data); 
  this.spiner.show();
  this.toastr.success('Created !!');
  console.log(data);
  
  // window.location.reload();
  // this.refresh.next(new Date().getTime());
  this.spiner.hide();

  
}, err => {
this.spiner.hide();
this.toastr.error('Could Not Create ');
}
)

}


GetNumberjobs(period:any){
  const headerDict = {
   'Content-Type': 'application/json',
   'Accept': 'application/json'
 }
 const requestOptions = {                                                                                                                                                                                 
   headers: new HttpHeaders(headerDict), 
 };

return  this.http.post('https://localhost:44391/api/Jobvacncy/GetNumberjobs/',period,requestOptions);

} 

//update job
Updatejob(data:any){
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.jobvacancy_ID=parseInt(data.jobvacancy_ID);

  data.company_ID=parseInt(data.company_ID);

return this.http.put('https://localhost:44391/api/Jobvacncy/UpdateJobVacancy',data,requestOptions).subscribe((result:any)=>{
// console.log(data); 
this.spiner.show();
this.toastr.success('Updated !!');
this.router.navigate(['company/managejob']);

// window.location.reload();
// this.refresh.next(new Date().getTime());
this.spiner.hide();


}, err => {
this.spiner.hide();
this.toastr.error('Could Not Update  ');
}
)

}
//delete job
DeleteJobVacancy(id:number)
{
return this.http.delete('https://localhost:44391/api/Jobvacncy/DeleteJobVacancy/'+id).subscribe((result:any)=>{

  this.spiner.show();
  this.toastr.success('Deleted !!');
  window.location.reload();
  this.spiner.hide();
  // Automation Eng"
  
  }, err => {
  this.spiner.hide();
  this.toastr.error('Could Not Deleted  ');
  }
  )


}

}
