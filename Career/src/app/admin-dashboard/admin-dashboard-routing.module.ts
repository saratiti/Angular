import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobComponent } from './applied-job/applied-job.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ManageComponent } from './manage/manage.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 
  {
    path:'profile',
    component:ProfileComponent
  },

  {
    path:'job',
    component:JobDetailComponent
  },
  {
path:'company',
component:CompanyDetailsComponent
  },
{
  path:'Report',
  component:ReportsComponent
},
{
  path:'user',
  component:UserComponent

},
{
  path:'applyjob',
  component:AppliedJobComponent
},
{
  path:'message',
  component:MessageComponent
},
{path:'Manage',
component:ManageComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
