import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/auth/login.service";

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{

    boxColor: string = "#11213b";
    headingText: string = "Sign In";
    email: string = '';
    password: string = '';
    validInput: boolean = false;
    @Input() authorized: boolean;
    @Output() parentFunction: EventEmitter<any> = new EventEmitter()
    showWarningText: boolean = false;
    requestInProcess: boolean = false;
    requestError:string=""
    
    constructor(private authService:LoginService, private router:Router) {
        
    }

    ngOnInit(): void {
        this.authService.loginRequestObserver$
        .subscribe(
            (message) => {
            if (message == "success")
            {
              this.router.navigateByUrl('/dashboard')
            }
            else {
                this.requestInProcess = false;
                this.requestError = message;
              }
                }
            
        )
      
      }
    changeHandler = () => {
    
        if (this.email && this.password) this.validInput = true;

    }

    loginHandler = () => {

        const myObserver = {
            next: x => this.requestInProcess=false,
            error: err => this.requestInProcess=false,
          };
        let modal = {data:{
            email: this.email,
            pass: this.password,
          }}

        if (this.validInput)
        {
            this.requestInProcess = true;
            this.authService.login(modal).subscribe(myObserver)
        }

        else this.showWarningText = true;
        
    }

}