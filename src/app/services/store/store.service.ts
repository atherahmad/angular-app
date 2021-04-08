import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _storeListSource = new Subject<any>();
  storeListObserver$ = this._storeListSource.asObservable();
  storeSlotsObserver$ = this._storeListSource.asObservable();

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
          this.sendResult(result.message)
        }
        else this.sendResult(result.message)
      })
    )
  }

  getSlots = (id: string) => {
    const model = {
      id
    }
    console.log("type of id ", typeof(model))
    return this.http.post(this.storeListUrl + 'store/storeslots', model).pipe(
      map((response: any) => {
        const result = response;
        if (result.status === "success") {
          this.sendResult(result.message)
        }
        else this.sendResult(result)
     })
   ) 
  }
}
