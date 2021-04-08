import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateAppointmentService {

  private _appointmentCreator = new Subject<any>();
  appointmentObserver$ = this._appointmentCreator.asObservable();

  private appointmentUrl = 'http://localhost:5000/api/'
  
constructor(private http:HttpClient) { }

  sendAppoinmentStatus=(status: object)=>{
    this._appointmentCreator.next(status)
  }

  bookAppointment = (modal: object) => {
    return this.http.post(this.appointmentUrl + 'appointment/new' ,modal).pipe(
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
