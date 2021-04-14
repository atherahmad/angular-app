import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _userRegistration = new Subject<string>();
  registrationObserver$ = this._userRegistration.asObservable();
  
  private registrationUrl = 'https://appointment-app-backend.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  sendRegistrationResponse = (status: string) => {
    this._userRegistration.next(status)
  }

  registerUser = (model: object) => {
    return this.http.post(this.registrationUrl + 'auth/signup', model).pipe(
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
