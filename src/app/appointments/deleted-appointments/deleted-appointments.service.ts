import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DeletedAppointmentsService {

  private _url = environment.hostUrl;

  private _deletedAppointments = new Subject<any>();
  deletedAppointmentsObserver$ = this._deletedAppointments.asObservable()
  
  constructor(private http: HttpClient) { }
  
  setDeletedAppointments = (data:any) => {
    this._deletedAppointments.next(data);
  }

deletedAppointments = () => {
  
  return this.http.get(this._url + `dashboard/deletedappointments`).pipe(
    (map((response:any) => {
      const result = response;
      if (result.status === "success") {
        this.setDeletedAppointments(result)
      }
      else this.setDeletedAppointments(result)
    })))
  
}

}
