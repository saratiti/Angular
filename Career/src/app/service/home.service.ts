import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  datatesti:any[]=[{}];
  datatesti1:any[]=[{}];
  data:any[]=[{}];
  homeIddata:any[]=[{}];
  aboutdata:any[]=[{}];
  slidedata:any[]=[{}];
  contactdata:any[]=[{}];
  sliderimage:any;
  aboutimage:any;
  constructor(private http:HttpClient,public spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
 //get all Testimonial admin
  getTesti(){

    return this.http.get('https://localhost:44391/api/testimonial/')
    .subscribe((result:any)=>{this.datatesti=result})

  }

   //get all Testimonial home
   getTestihome(){

    return this.http.get('https://localhost:44391/api/testimonial/GetAllTestimonialhome/')
    .subscribe((result:any)=>{this.datatesti1=result})

  }
  //update Testimonial
updateTesti(data:any){

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
   data.id=parseInt(data.id);
    return this.http.put('https://localhost:44391/api/testimonial',data,requestOptions).subscribe((result:any)=>{
    
      this.spiner.show();
      this.toastr.success('Accepted !!');
      // this.router.navigate(['']);
      this.spiner.hide();
      
      
      }, err => {
      this.spiner.hide();
      this.toastr.error('Could Not added  ');
      }
      )
  
  }
//create Testimonial
  createTesti(data:any){

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
   
    return this.http.post('https://localhost:44391/api/testimonial',data,requestOptions).subscribe((result:any)=>{
    
      this.spiner.show();
      this.toastr.success('created !!');
      // this.router.navigate(['']);
      this.spiner.hide();
      
      
      }, err => {
      this.spiner.hide();
      this.toastr.error('Could Not create  ');
      }
      )
  
  }
  //delete Testimonial

DeleteTestimonial(id:number)
{
return this.http.delete('https://localhost:44391/api/Testimonial/'+id).subscribe((result:any)=>{

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
// create Home
// createHome(){}
// update Home
updateHome(data:any){

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.id=parseInt(data.id);
  return this.http.put('https://localhost:44391/api/Homepage',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    this.toastr.success('Updated !!');
    // this.router.navigate(['']);
    this.spiner.hide();
    
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not Update  ');
    }
    )
 


}
// create contact
createcontact(data:any){
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.home_ID=3;
  return this.http.post('https://localhost:44391/api/Contact',data,requestOptions).subscribe((result:any)=>{
    
    this.spiner.show();
    this.toastr.success('Sending ^^');
    window.location.reload();
    this.spiner.hide();
    
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not create  ');
    }
    )
 


}
//getHomebyId
getHomebyId(id:number){
  id=1;
  return this.http.get('https://localhost:44391/api/Homepage/GetbyHomeId/'+id);


}

getallcontact(){
  return this.http.get('https://localhost:44391/api/Contact/')
    .subscribe((result:any)=>{this.contactdata=result})


}
deletecontact(id:number){

  return this.http.delete('https://localhost:44391/api/Contact/'+id).subscribe((result:any)=>{

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

createabout(data:any){
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.home_ID=parseInt(data.home_ID);
  return this.http.post('https://localhost:44391/api/About',data,requestOptions).subscribe((result:any)=>{
  
    this.spiner.show();
    this.toastr.success('created !!');
    // this.router.navigate(['']);
    this.spiner.hide();
    
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not create  ');
    }
    )

}
updateabout(data:any){

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.id=parseInt(data.id);
  return this.http.put('https://localhost:44391/api/About',data,requestOptions).subscribe((result:any)=>{
    // console.log(data); 
    this.spiner.show();
    this.toastr.success('Updated !!');
    // this.router.navigate(['']);
    this.spiner.hide();
    
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not Update  ');
    }
    )
 
}
getallabout(){
  return this.http.get('https://localhost:44391/api/About');

}
//slider
uploadAttachment(file:FormData){
    
  const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  }
  const requestOptions = {
  headers: new HttpHeaders(headerDict),
  };
  console.log(file);
  return this.http.post('https://localhost:44391/api/Slider/UploadImage/',file);
  } 

//about image
  uploadAttachment1(file:FormData){
    
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    console.log(file);
   return this.http.post('https://localhost:44391/api/About/UploadImage/',file);
    } 


    //Test image
  uploadAttachmentT(file:FormData){
    
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    console.log(file);
   return this.http.post('https://localhost:44391/api/Testimonial/UploadImage/',file);
    } 


createSlider(data:any){
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };

  
  return this.http.post('https://localhost:44391/api/Slider',data,requestOptions).subscribe((result:any)=>{
  
    this.spiner.show();
    this.toastr.success('created !!');
    // this.router.navigate(['']);
    this.spiner.hide();
    
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not create  ');
    }
    )
}
updateSlider(data:any){

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  data.id=parseInt(data.id);
console.log(data);

  return this.http.put('https://localhost:44391/api/Slider',data,requestOptions).subscribe((result:any)=>{
  
    this.spiner.show();
    this.toastr.success('Updated !!');
    // this.router.navigate(['']);
    this.spiner.hide();
    
    
    }, err => {
    this.spiner.hide();
    this.toastr.error('Could Not create  ');
    }
    )
}
getallSlider(){

  return this.http.get('https://localhost:44391/api/Slider');

}
deleteSlider(id:number){  
  return this.http.delete('https://localhost:44391/api/Slider/delete/'+id).subscribe((result:any)=>{

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



}
