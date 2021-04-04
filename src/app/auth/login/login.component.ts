import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

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
    @Output() parentFunction: EventEmitter<any>= new EventEmitter()
    
    constructor(private router:Router) {
        
        console.log(this.authorized, "in app")
    }

    changeHandler = () => {
        if (this.email && this.password) this.validInput = true
    }

    loginHandler = () => {
        this.authorized = true;
        this.router.navigate(['/register'])
        this.parentFunction.emit(true)
        console.log(this.parentFunction)
        
    }

    ngOnInit():void {
        this.parentFunction.emit(true)
    }

}