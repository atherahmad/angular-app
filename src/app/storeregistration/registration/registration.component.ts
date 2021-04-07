import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CreateStoreService } from "src/app/services/store/create.service";


@Component({
    selector: "app-store-registration",
    templateUrl: './registration.component.html',
    styleUrls:['./registration.component.css']
})

export class StoreRegistration{

    passwordMatchError: boolean = false;
    formError: boolean = false;
    openingHoursArray: Array<object> = [];
    closingHoursArray: Array<object> = [];
    slotsArray: Array<object> = [];
    allowedPersonsArray: Array<object> = [];
    responseError: boolean = false;
    responseErrorText: string = "";
    successfullRegistration: boolean = false;
    requestInProcess: boolean = false;

    storeDetails={
        storeName:"",
        storeAddress: "",
        openingHours: "",
        closingHours: "",
        personsPerSlot: "",
        slotDuration: "",
        password: "",
        confirmPassword: "",
        email: "",
    }


    constructor(private regService: CreateStoreService, private router:Router) {
        for (let i = 0; i <= 12; i++)
        {
            this.openingHoursArray.push({
                id: i,
                value: (`0${i}00`).slice(-4)
            });
            this.closingHoursArray.push({
                id: i + 8,
                value: (`0${i + 8}00`).slice(-4)
            });
            if (i < 6)
                this.slotsArray.push({
                    id: +(i + 1 + `0`),
                    value: (i + 1 + `0`)
                });
            this.allowedPersonsArray.push(
                {
                    id:i + 1,
                    value:i+1
                }
            )
        }
    }
    ngOnInit() {
        this.regService.storeRegistration$
            .subscribe(
                message => {
                    if (message === "success") this.successfullRegistration = true;
                    else {
                        console.log(message, "message to subject")
                        this.responseError = true;
                        this.responseErrorText = message;
                    }
                }
            )
    }
    storeRegistrationHandler = () => {

        if (this.storeDetails.password !== this.storeDetails.confirmPassword) return this.passwordMatchError = true;

        if (!Object.keys(this.storeDetails).every((key) => this.storeDetails[key]))
      return this.formError=true;
        else this.formError = false;
        
        const myObserver = {
            next: x =>  this.requestInProcess = false,
            error: err =>  this.requestInProcess = false,
        }
        let modal = {
            data: this.storeDetails
        }
        this.requestInProcess = true;
        this.regService.registerStore(modal).subscribe(myObserver);
    }

    optionSelectHandler = (event: Event) => {
        switch ((<HTMLInputElement>event.target).name) {
            case "personsPerSlot": {
                this.storeDetails.personsPerSlot = (<HTMLInputElement>event.target).value;
                break;
            }
            case "openingHours": {
                this.storeDetails.openingHours = (<HTMLInputElement>event.target).value;
                break;
            }
            case "closingHours": {
                this.storeDetails.closingHours = (<HTMLInputElement>event.target).value;
                break;
            }
            case "slotDuration": {
                this.storeDetails.slotDuration = (<HTMLInputElement>event.target).value;
                break;
            }
            default: break;
        }
    }

}