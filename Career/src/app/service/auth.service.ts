import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,public spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router){ }

clientid:number=0;
companyid:number=0;
data:any[]=[{}];


  submit(data:any){
    let responce1:any;

  const headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
  };
  const requestOptions={
    headers:new HttpHeaders(headerDict)
  };
  data.userName=data.userName.toString();
  data.c_Password=data.c_Password.toString();
 
  this.http.post('https://localhost:44391/api/JWT',data,requestOptions).subscribe((res:any)=>{
    responce1=res;

    const responce={
      token: responce1.toString(),
    }

    localStorage.setItem('token',responce.token);
   
    let data:any=jwt_decode(responce.token);
    console.log(data);
    
    localStorage.setItem('loginid',data.nameid);
    localStorage.setItem('user',JSON.stringify({...data}));
    if(data.role=='admin')
  {
    
    this.router.navigate(['admin/profile']);
  }
    else if (data.role=='client')
    {
      this.router.navigate(['user/profile']);
    }
    else if (data.role=='company')
    {
      this.router.navigate(['company/profile']);
    }


  }, err => {
    this.spiner.hide();
    this.toastr.error('Error ');
    })
  
     
}


submitcompany(data:any){
  let responce1:any;
  let responce2:any;
const headerDict={
  'Content-Type':'application/json',
  'Accept':'application/json'
};
const requestOptions={
  headers:new HttpHeaders(headerDict)
};
data.userName=data.userName.toString();
data.password=data.password.toString();

this.http.post('https://localhost:44391/api/JWT/companylogin',data,requestOptions).subscribe((res:any)=>{
  responce2=res;

  const responce={
    token: responce2.toString(),
  }


  localStorage.setItem('token',responce.token);
 
  let data:any=jwt_decode(responce.token);
  console.log(data);
  
  localStorage.setItem('loginid',data.nameid);
  localStorage.setItem('user',JSON.stringify({...data}));
  if(data.role=='admin')
{
  
  this.router.navigate(['admin/profile']);
}
  else if (data.role=='client')
  {
    this.router.navigate(['user/profile']);
  }
  else if (data.role=='company')
  {
    this.router.navigate(['company/profile']);
  }


}, err => {
  this.spiner.hide();
  this.toastr.error('Error ');
  })

   
}


}
