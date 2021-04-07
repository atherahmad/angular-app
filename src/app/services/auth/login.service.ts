import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authUrl: string = "http://localhost:5000/api/"

  private _loginRequestSource = new Subject<string>();
  loginRequestObserver$ = this._loginRequestSource.asObservable();

  constructor(private http: HttpClient, private route: Router) { }
  
  setAuthorization = (status: string) => {
    this._loginRequestSource.next(status)
  }
  login = (modal: any) => {

    return this.http.post(this.authUrl + 'auth/signin', modal).pipe(
      map((response: any) => {
        const user = response;
          if (user.status == "success") {
            localStorage.setItem("c2c-token", user.token)
            this.setAuthorization(user.status)
        }
          else this.setAuthorization(user.message)
      })
  )
  }

  forgetPassword = (modal: any) => {
  
    return this.http.post(this.authUrl + 'recovery/resetlink', modal,).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == "success") {
          console.log(user, "success")
        }
        else console.log(user.message);
      })
    )
  }

  resetPassword = (modal:any) => {
    return this.http.post(this.authUrl + `recovery/resetpass/${modal.id}`, modal).pipe(
      map((respone: any) => {
        const result = respone;
        if (result.status == "success"){
          console.log(result, "changed pass")
        }
        else 
          console.log("not changed", result)
        
      })
    )
  }

  tokenCheck = (modal:any) => {
    return this.http.post(this.authUrl + `recovery/resetcheck`, modal).pipe(
      map((respone: any) => {
        const result = respone;
        if (result.status == "success"){
          localStorage.setItem("c2c-token", result.token)
        }
        else 
          this.route.navigateByUrl('/login')
        
      })
    )
  }
}