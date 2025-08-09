import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from 'rxjs';
import { HomeserviceService } from 'src/app/service/homeservice.service';
import { SubcomponentComponent } from 'src/app/subcomponent/subcomponent.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 // imagefile:File|any

 firstname:string=''
  form1=new FormGroup({
    id:new FormControl('',[Validators.required]),
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required])

  })
  constructor(private spinner:NgxSpinnerService,public service:HomeserviceService,private matdialog:MatDialog) {
    this.service.getallstd()
    this.service.getstdbyid()
    this.spinner.show()
   
   
   
    setTimeout(()=>{
      this.spinner.hide();
    },2000);

    

   }

  ngOnInit(): void {
  }
getvalue()
{
console.log(this.form1.value)
  this.service.inserstd(this.form1.value)
}
upload(file:any)
{
  let uploadfile=<File>file[0]//c:fakepath
 let formdata=new FormData()
 formdata.append('file',uploadfile,uploadfile.name)
 /*
 c:fakepath image1
 c:fakepath image2
 c:fakepath image3
 */

this.service.uploadimage(formdata)
}
getvaluemethod2()
{
let object={
fname:this.firstname,
lname:this.service.imagename

}
console.log(object)
this.service.inserstd(object)
}
openmatdialog(id:number)
{
this.matdialog.open(SubcomponentComponent,{data:{id:id}})
}





}
