import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CreateAppointmentService {

  private _appointmentCreator = new Subject<any>();
  appointmentObserver$ = this._appointmentCreator.asObservable();

  private _url = environment.hostUrl;
  
constructor(private http:HttpClient) { }

  sendAppoinmentStatus=(status: object)=>{
    this._appointmentCreator.next(status)
  }

  bookAppointment = (modal: object) => {
    return this.http.post(this._url + 'appointment/new' ,modal).pipe(
      (map((response: any) => {
        const result = response;
        if (result.status === "success") {
          this.sendAppoinmentStatus(result.status)
        }
        else {this.sendAppoinmentStatus(result.message)}
        
      }))
    )
  }
}
