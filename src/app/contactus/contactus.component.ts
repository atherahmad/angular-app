import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ContactService } from "./contactus.service";

@Component({
    selector: 'app-main-contact',
    templateUrl: './contact.component.html',
    styleUrls: [
        './contact.component.css',
        '../../app.component.css'
    ]
})
export class ContactComponent{
    name: string = "";
    email: string = "";
    subject: string = "";
    messageText: string = "";
    formError: boolean = false;
    responseError: boolean = false;
    responseErrorText: string = "";
    successfullyContacted: boolean = false;

    contactDetails = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    constructor(private contactService: ContactService, private router: Router) { }
    ngOnInit(){
        this.contactService.contactRequestObserver$
            .subscribe(
                message => {
                    this.successfullyContacted = true;
                    }
                
            )

    }
    contactHandler = () => {


        if (!Object.keys(this.contactDetails).every((key) => this.contactDetails[key]))
      return this.formError=true;
        else this.formError = false;
            const myObserver = {
                next: x => x,
                error: err => err
            };
        let modal = {
            data:this.contactDetails
        }
        this.contactService.contactHandler(modal).subscribe(myObserver)
    }
}