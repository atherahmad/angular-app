import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private authUrl: string = "https://appointment-app-backend.herokuapp.com/api/";
  //private authUrl: string = "http://localhost:5000/api/";
  
  private _userData = new Subject<any>();
  userData$ = this._userData.asObservable();

  constructor(private http: HttpClient) { }
  
  setUserData = (userData: any) => {
    this._userData.next(userData)
  }

  tokenCheck = () => {
    
    return this.http.get(this.authUrl + 'auth/authenticated').pipe(
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

}
