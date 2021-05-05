import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class StoreslotsService {

  private _storeSlotstSource = new Subject<any>();
  storeSlotsObserver$ = this._storeSlotstSource.asObservable();

  private _url: string = environment.hostUrl;

constructor(private http: HttpClient) { }

sendResult(status: object) {
  this._storeSlotstSource.next(status)
}
getSlots = (id: string) => {
  const model = {
    id
  }
  console.log("type of id ", typeof(model))
  return this.http.post(this._url + 'store/storeslots', model).pipe(
    map((response: any) => {
      const result = response;
      if (result.status === "success") {
        this.sendResult(result.message.slotsArray)
      }
      else this.sendResult(result)
   })
 ) 
}
}
