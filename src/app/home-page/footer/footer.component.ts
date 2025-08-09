import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear :Date|any=undefined;
  NameHome :string='';
  id:number=1;
  constructor(public route:Router,public home:HomeService) {  this.currentYear=new Date().getFullYear();}

  ngOnInit(): void {
    this.gethomeName();
  }


  gethomeName(){
    this.home.getHomebyId(this.id).subscribe((result:any)=>{this.home.homeIddata=result;
    console.log(this.home.homeIddata);
    this.NameHome=this.home.homeIddata[0].namehome;
    })
  }
  company(){this.route.navigate(['companylist']);}
  About(){this.route.navigate(['about']);}
  Home(){this.route.navigate(['']);}
  contact(){
    this.route.navigate(['contact']);}
}
