import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { JobListComponent } from './job-list/job-list.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyjobComponent } from './companyjob/companyjob.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CompanyListComponent,
    JobListComponent,
    TestimonialComponent,
    CompanyjobComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
