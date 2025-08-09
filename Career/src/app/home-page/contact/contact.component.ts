import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public route:Router,public home:HomeService) { }
  createcontact:FormGroup=new FormGroup(
    {
      userName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone:new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{10}")]),
      message:new FormControl('',[Validators.required]),
    }
  )
  public myError = (controlName: string, errorName: string) =>{
    return this.createcontact.controls[controlName].hasError(errorName);
    }
  sendMessage(){
  
    const value = this.createcontact.value;
    console.log(value);
    this.home.createcontact(value);

  }
  ngOnInit(): void {
  }
  Home(){this.route.navigate(['']);}
}
