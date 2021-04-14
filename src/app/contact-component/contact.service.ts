import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService{


  private _contactRequestSource = new Subject<string>();
  contactRequestObserver$ = this._contactRequestSource.asObservable();

 
  private contactUrl: string = "https://appointment-app-backend.herokuapp.com/api/";

  constructor(private http: HttpClient, private router: Router) { }

  sentContactResult = (status: string) => {
    this._contactRequestSource.next(status)
  }


  contactHandler = (modal: any) => {
    return this.http.post(this.contactUrl + 'contact/querry', modal).pipe(
      map((response: any) => {
        const result = response;
        if (result.status === "success") {
          this.sentContactResult(result.status)
        }
        else {
          this.sentContactResult(result.message)
        }
      })
    )
  }

}