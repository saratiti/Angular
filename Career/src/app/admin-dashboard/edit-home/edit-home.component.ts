import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  constructor(private dialog:MatDialogRef<EditHomeComponent>, @Inject(MAT_DIALOG_DATA) public data:any,public home:HomeService) { }
name:string='';
  ngOnInit(): void {
    this.gethome();
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

  update()
  {
    this.Updatehome.controls['id'].setValue(1)
    const value = this.Updatehome.value;
      this.home.updateHome(value);

  }
}
