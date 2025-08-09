import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class JobapplyService {
  data:any[]=[{}];
  dataclient:any[]=[{}];
  dataclientmess:any[]=[{}];
  searchdata:any[]=[{}];
  dataclientComp:any[]=[{}];
totaljob:any[]=[{}];
accpetjob:any[]=[{}];
rejectjob:any[]=[{}];

  constructor(private http:HttpClient,public spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  getAllapplyjob(){
    return this.http.get('https://localhost:44391/api/ApplyJob/GetAllApplyJob').subscribe((res:any)=>{
         //   this.count=res.length;
      this.data=res;
      this.spiner.show();
      this.toastr.success('Data Retrive !!');
    
      // this.refresh.next(new Date().getTime());
      this.spiner.hide();
  
      
  }, err => {
    this.spiner.hide();
    this.toastr.error('Error ');
    }
    )

  }

  
  GetAllApplyJobClientmess(id:number){
    return this.http.get('https://localhost:44391/api/ApplyJob/GetAllApplyJobClientmess/'+id).subscribe((res:any)=>{
      this.dataclientmess=res;
  
      
      this.spiner.show();
      this.toastr.success('Data Retrive !!');
     // this.refresh.next(new Date().getTime());
      this.spiner.hide();
  
      
  }, err => {
    this.spiner.hide();
    this.toastr.error('Error ');
    }
    )}
  GetAllApplyJobClient(id:number){
  return this.http.get('https://localhost:44391/api/ApplyJob/GetAllApplyJobClient/'+id).subscribe((res:any)=>{
    this.dataclient=res;

    
    this.spiner.show();
    this.toastr.success('Data Retrive !!');
   // this.refresh.next(new Date().getTime());
    this.spiner.hide();

    
}, err => {
  this.spiner.hide();
  this.toastr.error('Error ');
  }
  )}

  Uploadcv(file:FormData){
    
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };

    
  return  this.http.post('https://localhost:44391/api/ApplyJob/UPLOADCV/',file);
   
  }  





  GetAllApplyJobClientCompany(){
    return this.http.get('https://localhost:44391/api/ApplyJob/GetAllApplyJobClientdto');}
   
  searchDate(searchTwoDate:any){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
      return this.http.post('https://localhost:44391/api/ApplyJob/SearchBetweenToDateclient/',searchTwoDate,requestOptions).subscribe((res:any)=>{
        this.dataclient=res;
        console.log(this.dataclient);
        
        this.spiner.show();
        this.toastr.success('Search ok !!');
      
        // this.refresh.next(new Date().getTime());
        this.spiner.hide();
    
        
    }, err => {
      this.spiner.hide();
      this.toastr.error('Error ');
      }
      )
  
  }

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


  searchDateadmin(searchTwoDate:any){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
      return this.http.post('https://localhost:44391/api/ApplyJob/SearchBetweenToDate/',searchTwoDate,requestOptions).subscribe((res:any)=>{
        this.dataclientComp=res;
        console.log(this.dataclient);
        
        this.spiner.show();
        this.toastr.success('Search ok !!');
      
        // this.refresh.next(new Date().getTime());
        this.spiner.hide();
    
        
    }, err => {
      this.spiner.hide();
      this.toastr.error('Error ');
      }
      )
  
  }
  create(data:any){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    data.client_ID=parseInt(data.client_ID);
    data.jobVacancy_ID=parseInt(data.jobVacancy_ID);
    console.log(data);
    
      return this.http.post('https://localhost:44391/api/ApplyJob/CreateApplyjob',data,requestOptions).subscribe((res:any)=>{
        this.spiner.show();
        this.toastr.success('Apply Success !!');
      
        // this.refresh.next(new Date().getTime());
        this.spiner.hide();
    
        
    }, err => {
      this.spiner.hide();
      this.toastr.error('Error ');
      }
      )
  
  }
  update(data:any){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
      return this.http.put('https://localhost:44391/api/ApplyJob/UpdateApplyJob',data,requestOptions).subscribe((res:any)=>{
        this.spiner.show();
        this.toastr.success('Send Success !!');
          this.spiner.hide();
    
        
    }, err => {
      this.spiner.hide();
      this.toastr.error('Error ');
      }
      )
  
  }
  //NUBER OF APPLY JOB report
  getnumberofApplyjob(period:any){
    const headerDict = {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   }
   const requestOptions = {                                                                                                                                                                                 
     headers: new HttpHeaders(headerDict), 
   };
  
  return  this.http.post('https://localhost:44391/api/ApplyJob/numberofapplyjob/',period,requestOptions);
  
  } 
  






//NUBER OF APPLY JOB reject report
getnumberofApplyjobreject(period:any){
  const headerDict = {
   'Content-Type': 'application/json',
   'Accept': 'application/json'
 }
 const requestOptions = {                                                                                                                                                                                 
   headers: new HttpHeaders(headerDict), 
 };

return  this.http.post('https://localhost:44391/api/ApplyJob/numberofapplyjobreject/',period,requestOptions);

} 

//NUBER OF APPLY JOB accept report
getnumberofApplyjobaccept(period:any){
  const headerDict = {
   'Content-Type': 'application/json',
   'Accept': 'application/json'
 }
 const requestOptions = {                                                                                                                                                                                 
   headers: new HttpHeaders(headerDict), 
 };

return  this.http.post('https://localhost:44391/api/ApplyJob/numberofapplyjobaccept/',period,requestOptions);

} 
}
