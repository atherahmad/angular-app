import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/auth/login.service";

@Component({
    selector: 'app-auth-forget',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.css']
})
export class ForgetPassword {
    email: string = "";
    validInput: boolean = false;
    showError: boolean = false;
    requestInProccess: boolean = false;                                                                                                                                                                                                      

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
                    this.router.navigateByUrl('/login');
                },
                error: err => {
                    this.requestInProccess = false;
                    console.log(this.email)
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