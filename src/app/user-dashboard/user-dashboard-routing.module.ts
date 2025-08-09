import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { JobVacancyComponent } from './job-vacancy/job-vacancy.component';
import { JobsComponent } from './jobs/jobs.component';
import { MessageComponent } from './message/message.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserapplyComponent } from './userapply/userapply.component';

const routes: Routes = [
  {path:'profile',
component:ProfileComponent
},
{
  path:'testimonial',
  component:TestimonialComponent
},
{
  path:'password',
  component:PasswordComponent
},
{
  path:'job',
  component:JobsComponent
},
{
path:'jobvacancy',
component:JobVacancyComponent
},
{
  path:'education',
  component:EducationComponent
},
{
  path:'massage',
  component:MessageComponent
},
{
path:'userapply',
component:UserapplyComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
