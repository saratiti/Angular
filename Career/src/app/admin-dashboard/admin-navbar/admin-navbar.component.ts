import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(public admin:UserService) { }
  fullName:string=this.admin.databyId[0].fname +' ' + this.admin.databyId[0].lname;
  Image:string=this.admin.databyId[0].imagename

  ngOnInit(): void {
     this.getclient();
  }
  admin_Id:any=localStorage.getItem('loginid');

  
  getclient(){
    this.admin.GetByclientId(this.admin_Id);}
}
