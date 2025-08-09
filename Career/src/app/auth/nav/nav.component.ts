import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public route:Router,public home:HomeService) { }
id:number=1;
NameHome:string='';
  ngOnInit(): void {
    this.gethomeName();
  }

  
  gethomeName(){
    this.home.getHomebyId(this.id).subscribe((result:any)=>{this.home.homeIddata=result;
    console.log(this.home.homeIddata);
    this.NameHome=this.home.homeIddata[0].namehome;
    })
  }
  Testimonial(){
    this.route.navigate(['test']);
    
      }
      contact(){
        this.route.navigate(['contact']);
      }
      job(){this.route.navigate(['joblist']);}
      company(){this.route.navigate(['companylist']);}
      About(){this.route.navigate(['about']);}
      Home(){this.route.navigate(['']);}
      login(){this.route.navigate(['auth/login']);}

}
