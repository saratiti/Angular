import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { HomeserviceService } from '../service/homeservice.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit {
  fname=new FormControl('',[Validators.required])
  lname=new FormControl('',[Validators.required])

  constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number},public service:HomeserviceService) {

    this.service.id=data.id
    this.service.getstdbyid()
    console.log(data.id)
   }

  ngOnInit(): void {
  }
  closedialog()
  {

    let obj={
      id:this.data.id,
      fname:this.fname.value,
      lname:this.lname.value
    }
    this.service.updatestd(obj)
    this.router.navigate(['home/about'])
    window.location.reload()
    this.matdialog.closeAll()

  
  }

}
