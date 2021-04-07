import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/auth/login.service";

@Component({
    selector: 'app-store-confirmation',
    templateUrl: '../../auth/accountconfirmation/accountconfirmation.component.html',
    styleUrls:['../../auth/resetpassword/reset.component.css']
})
export class StoreRegistrationConirmation{

    password: string = "";
    confirmPassword: string = "";
    showInputError: boolean = false;
    allInputsEntered: boolean = true;
    passwordMatchError: boolean = false;
    id: string;
    token: string;
    resetTokenVerified: boolean = true;

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
            error: err => console.log(err),
        };
        //this.authService.tokenCheck(modal).subscribe(myObserver);
  
    }
    goToHome = () => {
        console.log("i am called")
        this.router.navigateByUrl('/login')
      }

    
    changeHandler = () => {
        if (this.password && this.confirmPassword) this.allInputsEntered = true;
        this.passwordMatchError = false;

    }
}