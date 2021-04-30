import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {

  private _headingSource = new Subject<any>();
  heading$ = this._headingSource.asObservable();
constructor() { }

  setHeading = (heading: any) => {
    this._headingSource.next(heading)
  }
}
