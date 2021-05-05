import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CreateStoreService {

  private _storeRegistrationSource = new Subject<string>();
  storeRegistration$ = this._storeRegistrationSource.asObservable();

  private _url: string = environment.hostUrl;

  constructor(private http: HttpClient, private route: Router) { }
  
  sentStatus(status: string) {
    this._storeRegistrationSource.next(status)
  }

  registerStore = (modal: any) => {
    return this.http.post(this._url+'store/register', modal).pipe(
      map((response: any) => {
        const result = response;
        if (result.status == "success") {
          this.sentStatus(result.status)
        }
        else this.sentStatus(result.message)
      })
    )
  }
  
}
