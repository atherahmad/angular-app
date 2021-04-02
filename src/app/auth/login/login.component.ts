import { Component } from "@angular/core";

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    email: string = '';
    password: string = '';
    validInput: boolean = false;
    displayCredential:boolean = false;

    changeHandler = () => {
        if (this.email && this.password) this.validInput = true
    }
    showCredential = () => this.displayCredential = true;
}