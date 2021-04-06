import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${localStorage.getItem('c2c-token')}`
      }
    })
    return next.handle(tokenizedReq)
  }
}