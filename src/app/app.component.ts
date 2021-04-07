import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title:string;
  authorized: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

ngOnInit(): void {
  this.loginService.loginRequestObserver$
  .subscribe(
      (message) => {
      if (message == "success")
      {
        this.authorized = true;
        this.router.navigateByUrl('/dashboard')
      }
      else {
        this.authorized = false;

        }
          }
      
  )

}
  setAuthorized = () => this.authorized = true;
  setUnAuthorized = () => this.authorized = false;
  
}

