import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private authUrl: string = "http://localhost:5000/api/dashboard/"


  private _userAppointments = new Subject<any>();
  userAppointmentsObserver$= this._userAppointments.asObservable()


  constructor(private http: HttpClient, private route: Router) { }


    setUserAppointments = (data: any) => {
      this._userAppointments.next(data)
    }
    getAppointments=()=>{
      

      return this.http.get(this.authUrl + 'appointments').pipe(
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
  

