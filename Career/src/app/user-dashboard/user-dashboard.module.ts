import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PasswordComponent } from './password/password.component';

import { EducationComponent } from './education/education.component';
import { MessageComponent } from './message/message.component';

import { SharedModule } from '../shared/shared.module';
import { UserapplyComponent } from './userapply/userapply.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { JobVacancyComponent } from './job-vacancy/job-vacancy.component';


@NgModule({
  declarations: [
    ProfileComponent,
    JobsComponent,
    TestimonialComponent,
    PasswordComponent,
 JobVacancyComponent,
    EducationComponent,
    MessageComponent,
    UserapplyComponent,
    UserNavbarComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule
  ]
})
export class UserDashboardModule { }
