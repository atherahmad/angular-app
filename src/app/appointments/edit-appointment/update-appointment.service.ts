import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppointmentService {

  private _url = environment.hostUrl;

constructor(private http:HttpClient) { }

  updateAppointment = (appointment: object) => {
    return this.http.post<Response>(this._url+`appointment/update`,appointment)
  }
}
