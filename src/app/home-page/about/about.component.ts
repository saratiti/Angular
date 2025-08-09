import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public route:Router,public about:HomeService) { }
header:string='';
caption:string='';
image:string='';
  ngOnInit(): void {
    this. getallAbout();
  }
  getallAbout()
  {
this.about.getallabout().subscribe((result:any)=>{
  this.about.aboutdata=result;
  this.header=this.about.aboutdata[0].title;
 this.caption=this.about.aboutdata[0].caption;
 this.image=this.about.aboutdata[0].imageUS;
})

  }
  Home(){this.route.navigate(['']);}
}
