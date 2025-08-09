import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDashboardRoutingModule } from './company-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';

import { UserprofileComponent } from './userprofile/userprofile.component';

import { ManagejobComponent } from './managejob/managejob.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyNavbarComponent } from './company-navbar/company-navbar.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ApplyjobComponent,
    PostjobComponent,
    ReportsComponent,
    ManageCandidateComponent,

    UserprofileComponent,
     ManagejobComponent,
     UpdatejobComponent,
     CompanyNavbarComponent
  ],
  imports: [
    CommonModule,
    CompanyDashboardRoutingModule,
    SharedModule
    
  ]
})
export class CompanyDashboardModule { }
