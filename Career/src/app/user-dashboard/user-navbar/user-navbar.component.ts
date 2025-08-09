import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  user_Id:any=localStorage.getItem('loginid');
  constructor(public user:UserService) { }

  ngOnInit(): void {
    this.getclient();
  }
  fullName:string=this.user.databyId[0].fname +' '+ this.user.databyId[0].lname;
  Image:string=this.user.databyId[0].imagename
  getclient(){
    this.user.GetByclientId(this.user_Id);}
}
