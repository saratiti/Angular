import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // static cid:number=0;
  data:any[]=[{}];
  dataedu:any[]=[{}];
   databyId:any[]=[{}];
   dataedubyid:any[]=[{}];
  dataClient:any[]=[{}];
  display_image:any;
  message:any[]=[{}];
  profileid:number=0;
  applyid:number=0;
  cv:any;
  constructor(private http:HttpClient,public spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
  getAlluser(){
    return this.http.get('https://localhost:44391/api/Client');

  }
  GetAllClientEdu (){
    return this.http.get('https://localhost:44391/api/Education/GetAllClientEdu');

  }
  GetByclientId(id:number)
  {
    return this.http.get('https://localhost:44391/api/Client/GetByclientId/'+id).subscribe((res:any)=>{
      this.databyId=res;
      console.log(this.databyId);
      
    })
  }
  GetEducationbyclientid(id:number)
  {
    return this.http.get('https://localhost:44391/api/Education/GetEducationbyclientid/'+id);

  }
//education
//create Edu
createEdu(data:any){

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.client_ID=parseInt(data.client_ID);
   data.gpa=parseInt(data.gpa);
  return this.http.post('https://localhost:44391/api/Education/CreateEducation',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    window.location.reload();
    this.toastr.success('Created !!');
    this.spiner.hide();    
}, err => {
  this.spiner.hide();
  this.toastr.error('Could Not create ');
  })
}
//update Edu
UpdateEdu(data:any){

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.education_ID=parseInt(data.education_ID);
   data.client_ID=parseInt(data.client_ID);
   data.gpa=parseInt(data.gpa);
  return this.http.put('https://localhost:44391/api/Education/UpdateEducation',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    this.toastr.success('Updated !!');
    // window.location.reload();
    this.spiner.hide();    
}, err => {
  this.spiner.hide();
  this.toastr.error('Could Not update !!');
  })
}

Uploadcv(file:FormData){
    
  const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  }
  const requestOptions = {
  headers: new HttpHeaders(headerDict),
  };
  // console.log(file);
 return this.http.post('https://localhost:44391/api/Education/Uploadcv/',file)
  }  
deleteedu(id:any)
{
  id=parseInt(id);
  return this.http.delete('https://localhost:44391/api/Education/DeleteEducation/'+id).subscribe((result:any)=>{

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
//education
  updateAdmin(data:any){
 
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    data.client_ID=parseInt(data.client_ID);
    return this.http.put('https://localhost:44391/api/Client',data,requestOptions).subscribe((result:any)=>{
      // console.log(data); 
      this.spiner.show();
      this.toastr.success('Updated !!');
      console.log(result);
      
      window.location.reload();
      // this.refresh.next(new Date().getTime());
      this.spiner.hide();
  
      
  }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not Update  ');
    }
    )
   
  }

  createClient(data:any){

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
data.imagename=this.display_image;
    return this.http.post('https://localhost:44391/api/Client/',data,requestOptions).subscribe((result:any)=>{
      // console.log(data); 
      this.spiner.show();
      this.toastr.success('Created !!');
      console.log(result);
      this.spiner.hide();    
  }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not create ');
    })
  }
 


updateClient(data:any){
 
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.client_ID=parseInt(data.client_ID);

  data.imagename=this.display_image;
  console.log( data.imagename);
  
  return this.http.put('https://localhost:44391/api/Client',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    this.toastr.success('Updated !!');

    this.spiner.hide();    
}, err => {
  this.spiner.hide();
  this.toastr.error('Could Not Update this user ');
  }
  )
 

}


  // Message
  getallMessage(id:number){

    return this.http.get('https://localhost:44391/api/ApplyJob/GetAllApplyJobMessage/'+id);

  }
    // Message
    getallapplyjobday(id:number,num:number){

      return this.http.get('https://localhost:44391/api/ApplyJob/GetApplyJobclientid/'+id+'/'+num);
  
    }
    
  deleteuser(id:number){

  return this.http.delete('https://localhost:44391/api/Client/delete/'+id).subscribe((result:any)=>{

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
 

  uploadAttachment(file:FormData){
    
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44391/api/Client/UploadImage/'+localStorage.getItem("loginid"),file).subscribe((data:any)=>{
  this.display_image=data.imagename;

    })
    }  


//   uploadAttachment(file:FormData){
//     //  debugger
//     const headerDict= {
//       'Content-Type':'application/json',
//       'Accept':'application/json'
//       }
//     const requestOptions={
//     headers:new HttpHeaders(headerDict)
//     }

//     this.http.post('https://localhost:44391/api/Client/UploadImage',file).subscribe(
//       (data:any)=>{ 
//         console.log(data);
        

//         // this.display_image=data.imagename;
// // console.log( this.display_image);
//  this.toastr.success('uploaded!!')
//         // debugger
//         if(data){
//           console.log(data);
//         }
//       },err =>{
//         this.toastr.error('can not uplaad the Image');
//       })

//   }



}
