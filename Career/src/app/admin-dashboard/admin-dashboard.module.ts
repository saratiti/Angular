import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageComponent } from './manage/manage.component';
import { UserComponent } from './user/user.component';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { SharedModule } from '../shared/shared.module';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MessageComponent } from './message/message.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { EditaboutComponent } from './editabout/editabout.component';








@NgModule({
  declarations: [


        ProfileComponent,
        CompanyDetailsComponent,
        JobDetailComponent,
        ReportsComponent,
        ManageComponent,
        UserComponent,
        AppliedJobComponent,
        AdminNavbarComponent,
        MessageComponent,
        EditHomeComponent,
        EditaboutComponent,
  
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule,

  ]
})
export class AdminDashboardModule { }
