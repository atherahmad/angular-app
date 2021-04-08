import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStore } from './store';
import {Observable, Subject} from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _storeListSource = new Subject<object>();
  storeListObserver$ = this._storeListSource.asObservable();

  private storeListUrl:string = `http://localhost:5000/api/`

  constructor(private http: HttpClient) { }
  
  sendResult(status: object) {
    this._storeListSource.next(status)
  }
  getStores= () =>{
    return this.http.get(this.storeListUrl + 'store/storeslist').pipe(
      map((response: any) => {
        const result = response;
        if (result.status === "success") {
          this.sendResult(result)
        }
        else this.sendResult(result)
      })
    )
  }
}
