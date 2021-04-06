import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStore } from './store';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _url:string = "/assets/data/store.json"

  constructor(private http:HttpClient) { }

  getStores=():Observable<IStore[]> =>{
    return this.http.get<IStore[]>(this._url)
  }
}
