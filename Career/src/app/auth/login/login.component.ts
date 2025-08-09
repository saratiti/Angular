import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router,public auth:AuthService) { }
  userLogin:FormGroup=new FormGroup({
    userName:new FormControl(),
    c_Password:new FormControl()

  });
  companyLogin:FormGroup=new FormGroup({
    userName:new FormControl(),
    password:new FormControl()

  });
  ngOnInit(): void {
  }

  login(){
    const value=this.userLogin.value;
  // console.log(value);
  
this.auth.submit(value);

  }
  logincompany(){
    const value=this.companyLogin.value;
   this.auth.submitcompany(value);
  }
register(){this.route.navigate(['auth/register']);}
}
