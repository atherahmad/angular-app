import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/auth/authentication.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{

    constructor(private router:Router, private authService:AuthenticationService){}

    ngOnInit(): void{
        if (localStorage.getItem("c2c-token")) {
            const myObserver = {
                next: x => x,
                error: err => err,
              };
            this.authService.tokenCheck().subscribe(myObserver)
        }
    }

    redirectHandler = () => {
        this.router.navigateByUrl('/registeration')
    }

    storeCustomerHandler = () => {
        this.router.navigateByUrl('/store/registration')
    }
}