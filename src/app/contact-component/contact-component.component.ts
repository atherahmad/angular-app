import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ContactService } from "./contact.service";


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

    boxColor: string = "#11213b";
    headingText: string = "Contact";

    name: string = "";
    email: string = "";
    subject: string = "";
    messageText: string = "";
    formError: boolean = false;
    responseError: boolean = false;
    responseErrorText: string = "";
    successfullyContacted: boolean = false;
    requestInProcess: boolean = false;

    contactDetails = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.contactRequestObserver$
    .subscribe(
        (message) => {
        if (message == "success") this.successfullyContacted = true;
        else {
          this.responseError = true;

          }
            }
        
    )

}
contactHandler = () => {


if (!Object.keys(this.contactDetails).every((key) => this.contactDetails[key]))
return this.formError=true;
else this.formError = false;
    const myObserver = {
        next: x => this.requestInProcess=false,
        error: err => err
    };
let modal = {
    data:this.contactDetails
}
  this.requestInProcess = true;
  this.contactService.contactHandler(modal).subscribe(myObserver)
}
  
  redirectToHome = () => {
  
    if (localStorage.getItem("c2c-token")) this.router.navigateByUrl('/dashboard')
    else this.router.navigateByUrl('/')
}
}
