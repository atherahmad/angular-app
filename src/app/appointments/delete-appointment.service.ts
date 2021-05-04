import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteAppointmentService {

  //private _url = 'https://appointment-app-backend.herokuapp.com/api/';
  private _url = 'http://localhost:5000/api/';

  private _appoinmentRemover = new Subject<string>();
  appointmentObserver$ = this._appoinmentRemover.asObservable();

  constructor(private http: HttpClient) { }

  sendStatus=(status: string)=>{
    this._appoinmentRemover.next(status)
  }
  
  deleteAppointment = (modal: object) => {
    
    return this.http.post(this._url + `appointment/delete`, modal).pipe(
      (map((response:any) => {
        const result = response;
        if (result.status === "success") {
          this.sendStatus(result.status)
        }
        else this.sendStatus(result.message)
      })))
    
  }

}
