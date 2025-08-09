import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyjobComponent } from './companyjob/companyjob.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './job-list/job-list.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
{
  path:'about',
  component:AboutComponent
},
{
  path:'companylist',
  component:CompanyListComponent
},
{
  path:'joblist',
  component:JobListComponent
},
{
  path:'test',
  component:TestimonialComponent
},
{
  path:'comjob',
  component:CompanyjobComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
