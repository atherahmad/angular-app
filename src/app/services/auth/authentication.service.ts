import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private _url: string = environment.hostUrl;
  
  private _userData = new Subject<any>();
  userData$ = this._userData.asObservable();

  private _validUser = new Subject<any>();
  validUser$ = this._validUser.asObservable();

  constructor(private http: HttpClient, private router:Router) { }
  
  setUserData = (userData: any) => {
    this._userData.next(userData)
  }

  validUserData = (data: any) => {
    this._validUser.next(data)
  }

  tokenCheck = () => {
    
    return this.http.get(this._url + 'auth/authenticated').pipe(
      map((response: any) => {
        const user = response;
        if (user.status == "success") {
          this.setUserData(user)
        }
        else {
          localStorage.removeItem("c2c-token")
        
        }
        
      })
    )
  }

  verifyUser = () => {
    
    return this.http.get(this._url + 'auth/authenticated').pipe(
      map((response: any) => {
        const user = response;
        if (user.status == "success") {
          this.validUserData(user)
        }
        else {
          localStorage.removeItem("c2c-token")
          this.router.navigateByUrl('/')

        
        }
        
      })
    )
  }

}
