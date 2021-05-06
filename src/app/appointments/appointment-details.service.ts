import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailsService {

  private _url = environment.hostUrl;

constructor(private http:HttpClient) { }

  getAppointmentDetails = (id:string) => {
    return this.http.get(this._url+`appointment/details/${id}`)
  }
}
