import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { ManagejobComponent } from './managejob/managejob.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'applyjob',
component:ApplyjobComponent},
{
  path:'manage',
  component:ManageCandidateComponent
},
{path:'postjob',
component:PostjobComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'report',
  component:ReportsComponent
},
{
  path:'userprofile',
  component:UserprofileComponent
},
{
  path:'managejob',
  component:ManagejobComponent
},
{
  path:'updatejob',
  component:UpdatejobComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyDashboardRoutingModule { }
