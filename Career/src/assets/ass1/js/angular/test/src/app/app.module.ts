import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './hometemplatecomp/home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DddComponent } from './hometmep/ddd/ddd.component';
import { ContactComponent } from './contact/contact.component';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import{MatDialogModule} from'@angular/material/dialog'
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    DddComponent,
    ContactComponent,
    UserdashbordComponent,
  ],
  entryComponents:[SubcomponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
         NgbModule,
         MatFormFieldModule,
         MatInputModule,
         ToastrModule.forRoot({timeOut:2000,progressAnimation:"increasing"}),
         NgxSpinnerModule,
         HttpClientModule,
         MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
