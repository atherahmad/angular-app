import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/auth/login.service";

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    email: string = '';
    password: string = '';
    validInput: boolean = false;
    @Input() authorized: boolean;
    @Output() parentFunction: EventEmitter<any> = new EventEmitter()
    showWarningText: boolean = false;
    
    constructor(private authService:LoginService, private router:Router) {
        
    }

    changeHandler = () => {
    
        if (this.email && this.password) this.validInput = true;

    }

    loginHandler = () => {
        //this.router.navigate(['/register'])
        //this.parentFunction.emit(true)
        const myObserver = {
            next: x => this.router.navigateByUrl('/dashboard'),
            error: err => console.error('Login Failed'+err),
          };
        let modal = {data:{
            email: this.email,
            pass: this.password,
          }}

        if (this.validInput)
            this.authService.login(modal).subscribe(myObserver)

        else this.showWarningText = true;
        
    }

    ngOnInit():void {
        this.parentFunction.emit(true)
    }

}