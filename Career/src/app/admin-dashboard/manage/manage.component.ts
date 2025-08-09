import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { EditHomeComponent } from '../edit-home/edit-home.component';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @ViewChild('callupdatehomeDialog') callupdatehomeDialog! :TemplateRef<any>
  @ViewChild('callupdateaboutDialog') callupdateaboutDialog! :TemplateRef<any>
  @ViewChild('callupdatesliderDialog') callupdatesliderDialog! :TemplateRef<any>
  @ViewChild('callupdatetestDialog') callupdatetestDialog! :TemplateRef<any>
  @ViewChild('callcreateesliderDialog') callcreateesliderDialog! :TemplateRef<any>
  @ViewChild('callsliderDialog') callsliderDialog! :TemplateRef<any>
  

  constructor(private route:Router,public home :HomeService,public dialog: MatDialog) { }

Title:string='';
Caption:string='';
name:string='';
sliderimage='';
aboutimage='';
sliderid:number=0;
aboutid:number=0;
homeid=0;
  ngOnInit(): void {
    this.getall()
  }
gethome(){

  this.home.getHomebyId(1).subscribe((res:any)=>{
    this.home.homeIddata=res;
    this.name=this.home.homeIddata[0].namehome;
    })
}
  Updatehome:FormGroup=new FormGroup({
    id:new FormControl(),
    namehome:new FormControl(this.name)
  });
  Updateabout:FormGroup=new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    caption:new FormControl(),
    ImageUS:new FormControl()
  
  });
  createslider:FormGroup=new FormGroup({
    title:new FormControl(),
    caption:new FormControl(),
    imagePath:new FormControl()

  });
  updateeslider:FormGroup=new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    caption:new FormControl(),
    imagePath:new FormControl()

  });
updateTest:FormGroup=new FormGroup({
  id:new FormControl(),
  display:new FormControl()});
gettets()
{
this.home.getTesti();

}
accpet(id:number){
  this.updateTest.controls['id'].setValue(id);
  this.updateTest.controls['display'].setValue('true');
    const value = this.updateTest.value;
      this.home.updateTesti(value);
}
deletetest(id:number){
this.home.DeleteTestimonial(id);
}
  //home
  update()
  {
    this.Updatehome.controls['id'].setValue(1)
    const value = this.Updatehome.value;
      this.home.updateHome(value);
  }
//about
  updateabout()
  {
    this.Updateabout.controls['id'].setValue(this.aboutid);
    this.Updateabout.controls['ImageUS'].setValue(this.aboutimage.toString());
    const value = this.Updateabout.value;
    console.log(value);
    
      this.home.updateabout(value);
  }
  getall(){
this.home.getallabout().subscribe((res:any)=>{
this.home.aboutdata=res;
this.aboutid=this.home.aboutdata[0].id;
console.log(this.aboutid);

this.Title=this.home.aboutdata[0].title;
this.Caption=this.home.aboutdata[0].caption;

})
this.home.getHomebyId(1).subscribe((res:any)=>{
this.home.homeIddata=res;
this.name=this.home.homeIddata[0].namehome;
this.homeid=this.home.homeIddata[0].id;
})


this.home.getTesti();
}

//slider 
  Createslider()
  {
    

    this.createslider.controls['imagePath'].setValue(this.sliderimage.toString())

    const value=this.createslider.value;

this.home.createSlider(value);

  }

  updateslider()
  {
    this.updateeslider.controls['id'].setValue(this.sliderid)
    this.updateeslider.controls['imagePath'].setValue(this.sliderimage.toString())

    const value=this.updateeslider.value;

this.home.updateSlider(value);

  }
  deleteslider(id:number){
    console.log(id);
    
    this.home.deleteSlider(id)}


//about image
  uploadFile(event:any) {
    let files = event.target.files;
    if (files.length === 0) {
     console.log("No File Selected");
   return;
    }
    let fileToUpload = <File>files[0];
       
    const formData = new FormData();
    // //file --> اسم الفيلد اللي الداتا رح تحتويه 
    formData.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadAttachment1(formData).subscribe((data:any)=>{
      this.aboutimage=data.imageUS;
      
        })
    }


    //upload image for slider 

    uploadFileslider(event:any) {
      let files = event.target.files;
      if (files.length === 0) {
       console.log("No File Selected");
     return;
      }
      let fileToUpload = <File>files[0];
          // console.log(fileToUpload);
  
      const formData = new FormData();
      // //file --> اسم الفيلد اللي الداتا رح تحتويه 
      formData.append('file', fileToUpload, fileToUpload.name);
      this.home.uploadAttachment(formData).subscribe((data:any)=>{
    
      this.sliderimage=data.imagePath;
      console.log(this.sliderimage);
      
      });
      }


  edithome(){this.dialog.open(this.callupdatehomeDialog)}
  editabout(){this.dialog.open(this.callupdateaboutDialog)}
  editslider(){this.dialog.open(this.callsliderDialog) ;
    this.home.getallSlider().subscribe((res:any)=>{
    this.home.slidedata=res;
    })}
  editsliderbyid(id:number){this.dialog.open(this.callupdatesliderDialog);this.sliderid=id;}
  addslider(){this.dialog.open(this.callcreateesliderDialog)}
  edittets(){this.dialog.open(this.callupdatetestDialog)}


  profile(){
    this.route.navigate(['admin/profile'])

   } 
 
    company(){
    this.route.navigate(['admin/company'])

    }
    job(){ this.route.navigate(['admin/job']) }
    applyjob(){ this.route.navigate(['admin/applyjob'])}
 Report(){
  this.route.navigate(['admin/Report'])

 }
 Manage(){
  this.route.navigate(['admin/Manage'])

}
User()
{ 
   this.route.navigate(['admin/user'])

}
   login()
   {
    localStorage.removeItem('token');
 

    this.route.navigate(['auth/login'])

   }
   message()
   {
     this.route.navigate(['admin/message'])
   }
}
