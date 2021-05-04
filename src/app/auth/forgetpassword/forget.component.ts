import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/auth/login.service";

@Component({
    selector: 'app-auth-forget',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.css']
})
export class ForgetPassword {

    boxColor: string = "#ff8b0d";
    headingText:string="Reset Password"
    email: string = "";
    validInput: boolean = false;
    showError: boolean = false;
    requestInProccess: boolean = false;
    linkSent: boolean = false;

    constructor(private authService: LoginService, private router: Router) {
        
    }
    changeHandler = () => this.validInput = true;

    handleClose=()=> this.router.navigateByUrl('/login')
    
    resetHandler = () => {
        if (!this.validInput)  this.showError = true;
        else {
            const myObserver = {
                next: (x) => {
                    this.requestInProccess = false;
                    this.linkSent = true;
                },
                error: err => {
                    this.requestInProccess = false;
                }
            };
            let modal = {
                data: {
                    email: this.email,
                }
            }
            this.requestInProccess = true;
            this.authService.forgetPassword(modal).subscribe(myObserver)
        }
    }
}