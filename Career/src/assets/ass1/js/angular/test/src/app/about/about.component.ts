import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { ToastrService } from 'ngx-toastr';
import { first, timeout } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name:string='monther'
  age:number=50
  name1?:string
  name2?:string
  array:string[]=[]
  fname=new FormControl('',[Validators.required,Validators.minLength(8)])//<input type="text"  required/>
  lname=new FormControl('',[Validators.required])





  useregister=new FormGroup({//<form></form>
firstname:new FormControl('',[Validators.required]),
lastname:new FormControl('ahmad',[Validators.required])

})

username=new FormControl('',[Validators.required,Validators.email]);
password=new FormControl('',[Validators.required,Validators.maxLength(5)])

  constructor(private toastr:ToastrService,private spinner:NgxSpinnerService) {
    //this.toastr.error("message","title")
  this.spinner.show()
  setTimeout(() => {
    this.spinner.hide()
  }, 2000);
  
  }

  ngOnInit(): void {
  }
  setvalueofname1(event:any)
  {
    this.name1=event.target.value
    alert(this.name1)

  }

  opentoaster()
  {

    this.toastr.success('safasfdsafsa',"dasffasfas");
    this.toastr.info("DSfghjhfds","Dsafgasdfgd")
    this.toastr.error("DSadasdas","DASdasdasd")

  }
  shownamealert()
  {

    alert(this.name1)
  }
  shownamealert1()
  {

    return this.name1
  }
montherfunction()
{

  return this.name2
}
check():boolean
{
var firstname:string
firstname=this.fname.value
if(firstname.length>8)
{

  return true
}
else
{
  return false

}

}
check1():string{
var firstname:string
firstname=this.fname.value
if(firstname.length>8)
{

return "the value is >8"

}
else
{
  return "the value is <8"
}



}
formgroupuserreg():void
{console.log(this.useregister.value)
//this.fname.setValue('dsadf')

this.useregister.controls['lastname'].setValue('monther aljodeh')
}
reset1()
{

this.useregister.reset()


}}
