import { Component, OnInit } from '@angular/core';
 import { HomeService } from 'src/app/service/home.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.getalltest();
  }

getalltest(){

  this.home.getTestihome();
  console.log(this.home.datatesti);
  
}






}
