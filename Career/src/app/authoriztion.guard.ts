import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoriztionGuard implements CanActivate {
  constructor(
    private router: Router,
    private toaster:ToastrService
    // private accountService: AccountService
) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const user = this.accountService.userValue;
      // if (user) {
      //     // authorised so return true
      //     return true;
      // }

      // not logged in so redirect to login page with the return url
      // this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});

      const token = localStorage.getItem('token');
      console.log(state); 
      if(token){
      if(state.url.indexOf('admin')>=0){
      let user :any =localStorage.getItem('user');
      if(user){
        user=JSON.parse(user);
        if(user.role=='admin'){
        this.toaster.success('Welocome Admin ^^ ');
        return true;
        }
        else {
        this.toaster.warning('this page for admin');
        this.router.navigate(['']);
        this.toaster.warning('you are not autherize !!')
      
        return false;
        }
      }
        }
        else if(state.url.indexOf('user')>=0)
        {
          
            let user :any =localStorage.getItem('user');
            if(user){
              user=JSON.parse(user);
              if(user.role=='client'){
              this.toaster.success('Welocome To You ^^ ');
              return true;
              }
              else {
              this.toaster.warning('this page for client');
              this.router.navigate(['']);
   
            
              return false;
              }
            }
             


        }
        else if(state.url.indexOf('company')>=0)
        {
          
            let user :any =localStorage.getItem('user');
            if(user){
              user=JSON.parse(user);
              if(user.role=='company'){
              this.toaster.success('Welocome Employer ^^ ');
              return true;
              }
              else {
              this.toaster.warning('this page for company');
              this.router.navigate(['']);
   
            
              return false;
              }
            }
             


        }
      
      }
        else {
          this.toaster.warning('you are not User ');
          this.router.navigate(['auth/login']);

          return false ;
          } 
        
          return true;
          }
         
          }
          




    
    
 