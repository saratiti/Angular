import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AuthModule } from './auth/auth.module';
import { AuthoriztionGuard } from './authoriztion.guard';
import { CompanyDashboardModule } from './company-dashboard/company-dashboard.module';
import { HomePageModule } from './home-page/home-page.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';




const routes: Routes = [
  {path:'admin',
loadChildren:()=>AdminDashboardModule,
canActivate:[AuthoriztionGuard]

},
{
  path:'user',
  loadChildren:()=>UserDashboardModule,
  canActivate:[AuthoriztionGuard]
},
{
  path:'company',
  loadChildren:()=>CompanyDashboardModule,
  canActivate:[AuthoriztionGuard]
},
{
  path:'',
  loadChildren:()=>HomePageModule
},
{
  path:'auth',
  loadChildren:()=>AuthModule
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
