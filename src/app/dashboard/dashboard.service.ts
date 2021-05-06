import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _url: string = environment.hostUrl;


  private _userAppointments = new Subject<any>();
  userAppointmentsObserver$= this._userAppointments.asObservable()
 

  constructor(private http: HttpClient) { }


    setUserAppointments = (data: any) => {
      this._userAppointments.next(data)
    }
    getAppointments=()=>{
      

      return this.http.get(this._url + 'dashboard/appointments').pipe(
        map((response: any) => {
          const appointments = response;
          console.log("appointments in service", appointments)
            if (appointments.status == "success") {
              this.setUserAppointments(appointments)
          }
            else this.setUserAppointments(appointments.message)
        })
    )

  }

}
  

