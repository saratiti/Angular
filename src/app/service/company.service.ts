import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient,public spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  data:any[]=[{}];
  databyid:any[]=[{}];
  count:any[]=[{}];
  display_image:any;
  fullname:string='';
getallcompany(){
  return this.http.get('https://localhost:44391/api/Company/GetAllCompany');


}

getByCompanyId(id:number){
  return this.http.get('https://localhost:44391/api/Company/getByCompanyId/'+id);


}

getnumberofCompany(period:any){
   const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };

return  this.http.post('https://localhost:44391/api/Company/GetAllCompanyregister/',period,requestOptions);

} 
createcompany(data:any){
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  // data.companyId=parseInt(data.companyId);
  return this.http.post('https://localhost:44391/api/Company/CreateCompany',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    this.toastr.success('Register successfully !!');
    // console.log(result);
    
    // window.location.reload();
    // this.refresh.next(new Date().getTime());
    this.spiner.hide();

    
}, err => {
  this.spiner.hide();
  this.toastr.error('Could Not Register'+err);
  }
  )

}
updatecomapny(data:any){
 
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.company_ID=parseInt(data.company_ID);
  return this.http.put('https://localhost:44391/api/Company/UpdateCompany',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    this.toastr.success('Updated !!');
    console.log(result);
    
    // window.location.reload();
    // this.refresh.next(new Date().getTime());
    this.spiner.hide();

    
}, err => {
  this.spiner.hide();
  this.toastr.error('Could Not Update this company ');
  }
  )
 
}
deletecompany(id:number){
  return this.http.delete('https://localhost:44391/api/Company/'+id).subscribe((result:any)=>{

    this.spiner.show();
    this.toastr.success('Deleted !!');
    window.location.reload();
    this.spiner.hide();
 
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not Deleted  ');
    }
    )
  

}

searchByCompanyName(name:string)
{
  return this.http.get('https://localhost:44391/api/Company/getNameCompany/'+name);
}

uploadAttachment(file:FormData){
    
  const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  }
  const requestOptions = {
  headers: new HttpHeaders(headerDict),
  };
  console.log(file);
  this.http.post('https://localhost:44391/api/Company/UploadImage/'+localStorage.getItem("loginid"),file).subscribe((data: any) => {
  this.display_image=data.imagename;
  console.log(data);
  
  if(data){
  console.log(data);}
  }, err => {
    this.toastr.warning('Can not upload the image ');
  
  })
  } 



}
