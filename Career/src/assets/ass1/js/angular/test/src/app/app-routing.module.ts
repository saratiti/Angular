import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './hometemplatecomp/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomemoduleModule } from './module/homemodule/homemodule.module';
import { UsermoduleModule } from './usermodule/usermodule.module';
const routes: Routes = [{path:'home',loadChildren:()=>(import('./module/homemodule/homemodule.module').then((x)=>x.HomemoduleModule))},{path:'user',loadChildren:()=>(import('./usermodule/usermodule.module').then((x)=>x.UsermoduleModule))}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
