import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment"
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailsService {

  private _url = environment.hostUrl;

constructor(private http:HttpClient) { }

  getAppointmentDetails = (id:string):Observable<Appointment[]> => {
    return this.http.get<Appointment[]>(this._url+`appointment/details/${id}`)
  }
}
