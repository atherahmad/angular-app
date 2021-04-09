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
  firstName: string = "";
  lastName: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

ngOnInit(): void {
  this.loginService.userData$
  .subscribe(
      (data) => {
      if (data.status="success")
      {
        console.log("data in app", data)
        this.authorized = true;
        this.firstName = data.data.firstName;
        this.lastName = data.data.lastName;
        this.router.navigateByUrl('/dashboard') 
      }
      else {
        this.authorized = false;
        this.firstName = "";
        this.lastName = "";

        }
          }
      
  )

}
  setAuthorized = () => this.authorized = true;
  setUnAuthorized = () => this.authorized = false;
  
}

