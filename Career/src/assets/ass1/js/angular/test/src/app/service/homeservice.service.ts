import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { stddetails } from './stddetails';


@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  name:string="montheraljodeh"
  data:any=[{}]//response shape
data1:any={}
id?:number
catname:string=''
imagename:string=''
  constructor(private http:HttpClient,private toast:ToastrService) { }


  getallstd()
  {

this.http.get<stddetails[]>('https://localhost:44340/api/monther1111std').subscribe((result)=>{this.data= result
this.toast.success('Data Retrevie','Reterevid')

console.log(this.data)
})
  }
getstdbyid()
{

this.http.get('https://localhost:44340/api/monther1111std/getbystdid/'+this.id).subscribe((result)=>{this.data1=result})
}
deletestd()
{
  this.http.delete('https://localhost:44340/api/monther1111std/getbystdid/'+this.id).subscribe((result)=>{
this.toast.success("Delete","delete data ")},(err)=>{this.toast.warning("server is not available")})
}


inserstd(form:any){

  const headersDict={
  'content-type':'application/json',
  Accept:'application/json'
};
const requestOptions={
  headers: new HttpHeaders(headersDict),
};
this.http.post('https://localhost:44340/api/monther1111std',form,requestOptions).subscribe((res)=>{

console.log(true)

})}
updatestd(form:any)
{

  const headersDict={
    'content-type':'application/json',
    Accept:'application/json'
  };
  const requestOptions={
    headers: new HttpHeaders(headersDict),
  };
  this.http.put('https://localhost:44340/api/monther1111std',form,requestOptions).subscribe((res)=>{


console.log(true)

  })
}
uploadimage(form:FormData)
{
  /*
  const headersDict={
    'content-type':'application/json',
    Accept:'application/json'
  };
  const requestOptions={
    headers: new HttpHeaders(headersDict),
  };*/
  this.http.post('https://localhost:44340/api/monther1111std/uploadimage',form).subscribe((res:any)=>{

  this.imagename=res.lname
  console.log(this.imagename)
  })




}











  }



