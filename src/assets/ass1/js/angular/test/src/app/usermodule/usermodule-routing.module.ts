import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashbordComponent } from '../userdashbord/userdashbord.component';

const routes: Routes = [{path:'userdashboard',component:UserdashbordComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }
