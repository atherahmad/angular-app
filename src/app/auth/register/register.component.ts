import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterService } from "./register.service";

@Component({
    selector: 'app-auth-register',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent{

    boxColor: string = "#11213b";
    headingText: string = "Register";
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";
    confirmPassword: string = "";
    formError: boolean = false;
    formErrorText: string = "";
    passwordError: boolean = false;
    requestInProcess: boolean = false;
    responseErrorText: string = "";
    successfullRegistration: boolean = false;

    constructor(private registrationService: RegisterService, private router:Router) { }
    
    ngOnInit(){
        this.registrationService.registrationObserver$
            .subscribe(status => {
                if (status == "success") {
                    this.requestInProcess = false;
                    this.successfullRegistration = true;
                }
                else {
                    this.requestInProcess = false;
                    this.responseErrorText = status;
                }
        })
    }

    submitHandler = () => {
        
        if (this.password != this.confirmPassword) return this.passwordError = true;
        const model = {
            firstName:this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            confirmPassword:this.confirmPassword
        }
        if (!Object.keys(model).every((key) => model[key]))
        return this.formError=true;
        else this.formError = false;

        const myObserver= {
            next: x => x,
            error: err=> err
        }
        this.requestInProcess = true;
        this.registrationService.registerUser(model).subscribe(myObserver)
        
    }
}