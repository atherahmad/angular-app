import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/auth/login.service";

@Component({
    selector: 'app-auth-reset',
    templateUrl: './reset.component.html',
    styleUrls:['./reset.component.css']
})

export class ResetPassword implements OnInit{

    headingText: string = "Change Password";
    boxColor: string = "#ff8b0d";
    password: string = "";
    confirmPassword: string = "";
    showInputError: boolean = false;
    allInputsEntered: boolean = true;
    passwordMatchError: boolean = false;
    id: string;
    token: string;
    resetTokenVerified: boolean = false;
    requestInProccess: boolean = false;
    requestError: string = "";


    constructor(private authService: LoginService, private router: Router,private route: ActivatedRoute) {
      
    }
    ngOnInit() {

        this.id = this.route.snapshot.paramMap.get('id');
        this.token = this.route.snapshot.paramMap.get('token');
        let modal = {
            data: {
                id: this.id,
                token: this.token  
            }
        }
        const myObserver = {
            next: x => this.resetTokenVerified=true,
            error: err => this.router.navigateByUrl('login'),
        };
        this.authService.tokenCheck(modal).subscribe(myObserver);

        this.authService.loginRequestObserver$
        .subscribe(
            (message) => {
            if (message == "success")
            {
              this.router.navigateByUrl('/dashboard')
            }
            else {
                this.requestInProccess = false;
                this.requestError = message;
              }
                }
            
        )
      }

    changeHandler = () => {
        if (this.password && this.confirmPassword) this.allInputsEntered = true;
        this.passwordMatchError = false;

    }
    
    changePassword = () => {

        if (this.password != this.confirmPassword) return this.passwordMatchError = true;
        if (!this.password || !this.confirmPassword) return this.allInputsEntered = false;
        const myObserver = {
            next: x => this.router.navigateByUrl('/login'),
            error: err => console.error('Password change failed' + err),
        };
        let modal = {
            data: {
                pass: this.password,
                confirmPass: this.confirmPassword
            },
            id:this.id
        }
        this.requestInProccess = true;
        this.authService.resetPassword(modal).subscribe(myObserver)
   
    }
}