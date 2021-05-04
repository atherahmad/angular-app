import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authUrl: string = "https://appointment-app-backend.herokuapp.com/api/"
  //private authUrl: string = "http://localhost:5000/api/"


  private _loginRequestSource = new Subject<string>();
  loginRequestObserver$ = this._loginRequestSource.asObservable();

  private _confirmationSource = new Subject<boolean>();
  confirmationSource$ = this._confirmationSource.asObservable();

  private _userData = new Subject<any>();
  userData$ = this._userData.asObservable();

  constructor(private http: HttpClient, private route: Router) { }
  
  setAuthorization = (status: string) => {
    this._loginRequestSource.next(status)
  }

  setUserData = (data: any) => {
    this._userData.next(data)
  }

  setEmailConfirmation = (status: boolean) => {
    this._confirmationSource.next(status)
  }


  login = (modal: any) => {

    return this.http.post(this.authUrl + 'auth/signin', modal).pipe(
      map((response: any) => {
        const user = response;
          if (user.status == "success") {
            localStorage.setItem("c2c-token", user.token)
            this.setAuthorization(user.status)
            this.setUserData(user)
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
          this.setAuthorization(user.data)
        }
        this.setAuthorization(user.message);
      })
    )
  }

  resetPassword = (modal:any) => {
    return this.http.post(this.authUrl + `recovery/resetpass/${modal.id}`, modal).pipe(
      map((respone: any) => {
        const result = respone;
        if (result.status == "success"){
          this.setAuthorization(result.status)
        }
        else 
        this.setAuthorization(result.message);
        
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

  accountConfirmation = (modal: any) => {
    return this.http.post(this.authUrl + 'auth/confirm', modal).pipe(
      map((response: any) => {
        const result = response;
        if (result.status == "success") this.setEmailConfirmation(result.status)
        else this.route.navigateByUrl('/login')
      })
    )
  }
}
