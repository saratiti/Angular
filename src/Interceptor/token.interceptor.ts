import { HttpEvent, HttpHandler, HttpInterceptor, 
    HttpRequest } from "@angular/common/http";
    import { Injectable } from "@angular/core";
    import { Observable } from "rxjs";
    @Injectable()
    export class TokenInterceptor implements HttpInterceptor{


        // constructor(private accountService: AccountService) {}

        // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //     return next.handle(request).pipe(catchError(err => {
        //         if ([401, 403].includes(err.status) && this.accountService.userValue) {
        //             // auto logout if 401 or 403 response returned from api
        //             this.accountService.logout();
        //         }
    
        //         const error = err.error?.message || err.statusText;
        //         console.error(err);
        //         return throwError(error);
        //     }))





    intercept(req: HttpRequest<any>, next:  HttpHandler): Observable<HttpEvent<any>>{
        
    const token =localStorage.getItem('token')
    req = req.clone({
    setHeaders:{
    Autherization:`Bearer ${token}`
    }})
    return next.handle(req); }}
    