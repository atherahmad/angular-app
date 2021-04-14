import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{

    constructor(private router:Router){}

    redirectHandler = () => {
        this.router.navigateByUrl('/registeration')
    }

    storeCustomerHandler = () => {
        this.router.navigateByUrl('/store/registration')
    }
}