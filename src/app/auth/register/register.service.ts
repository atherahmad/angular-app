import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _userRegistration = new Subject<string>();
  registrationObserver$ = this._userRegistration.asObservable();
  
  private _url = environment.hostUrl;

  constructor(private http: HttpClient) { }

  sendRegistrationResponse = (status: string) => {
    this._userRegistration.next(status)
  }

  registerUser = (model: object) => {
    return this.http.post(this._url+ 'auth/signup', model).pipe(
      (map((response: any) => {
        const result = response;
        if (result.status == "success") this.sendRegistrationResponse(result.status)
        else {
          this.sendRegistrationResponse(result.message)
        }
      }))
    )
  }
}
