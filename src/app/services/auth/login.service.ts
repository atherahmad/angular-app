import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authUrl: string = "http://localhost:5000/api/auth/"

  constructor(private http: HttpClient) {
  
  }
  login = (modal: any) => {

    return this.http.post(this.authUrl + 'signin', modal,).pipe(
      map((response: any) => {
        const user = response;
        if (user.data.status === "success") {
          localStorage.setItem("c2c-token", user.data.token)
        }
      })
  )
  }
}
