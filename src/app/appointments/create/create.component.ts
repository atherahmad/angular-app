import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoreslotsService } from "src/app/services/store/storeslots.service";
import { StoreService } from "../../services/store/store.service";
import { CreateAppointmentService } from "./create-appointment.service";

@Component({
    selector: 'app-appointment-create',
    templateUrl: './create.component.html',
    styleUrls:['./create.component.css']
})
export class CreateAppointment{

    headingText: string = "Create Appointment";
    boxColor: string = "#11213b";
    public stores: Array<any> = [];
    leapYearCheck: boolean = false;
    selectedMonth: number;
    daysOfMonth: Array<string> = [];
    years: Array<number> = [];
    selectedStoreId: string = "";
    arrayOfSlots: Array<any> = [];
    slotNumber: string = "";
    selectedSlotYear: string = "";
    selectedSlotMonth: number;
    selectedDay: number;
    appointmentCreated: boolean = true
    storeName: string = "";
    slotName: string = "";

    formError: boolean = false;
    responseError: boolean = false;
    requestInProcess: boolean = false;
    responseErrorText: string = "";
    
    monthsOfYear = [
        { name: "Jan", id: 1 },
        { name: "Feb", id: 2 },
        { name: "Mar", id: 3 },
        { name: "Apr", id: 4 },
        { name: "May", id: 5 },
        { name: "Jun", id: 6 },
        { name: "Jul", id: 7 },
        { name: "Aug", id: 8 },
        { name: "Sep", id: 9 },
        { name: "Oct", id: 10 },
        { name: "Nov", id: 11 },
        { name: "Dec", id: 12 }
    ];

    constructor(private _storeService: StoreService, private _storeSlotsService: StoreslotsService, private _createAppointmentService: CreateAppointmentService, private router:Router) {
        for (let i = 1; i < 31; i++){
            this.years.push(2020 + i);
        }

        const myObserver= {
            next: x => x,
            error: err=> err
        }
        this._storeService.getStores().subscribe(myObserver);

    }
    ngOnInit() {
        this._storeService.storeListObserver$
            .subscribe(data => {
                this.stores = data
            });
            this._storeSlotsService.storeSlotsObserver$
            .subscribe(data => { 
                this.arrayOfSlots=data
            })
        this._createAppointmentService.appointmentObserver$
            .subscribe(data => {
                if (data == "success") {
                    this.requestInProcess = false
                    this.router.navigateByUrl('/dashboard')
                }
                else {
                    this.responseError = true;
                    this.responseErrorText = data;
                }
            })
        
    }

    yearSelector = (year:string) => {
        if (+year % 4 == 1) this.leapYearCheck = true;
        else this.leapYearCheck = false;
        this.selectedSlotYear = year;
        this.monthSelector(this.selectedMonth);
    }

    monthSelector = (month: number) => {
        this.daysOfMonth = [];
        this.selectedSlotMonth = month;
        this.selectedMonth = month;
        let daysLimit: Number;

        if (month <= 7) {
            if (month == 2)
            {
                if (this.leapYearCheck)  daysLimit = 28;
                else  daysLimit = 29;
            }
            else
                if (month % 2 == 0)  daysLimit = 30;
                else  daysLimit = 31;
        }
        else month % 2 === 0 ? daysLimit = 31 : daysLimit = 30;
          
        for (let i = 1; i <= daysLimit; i++){
            this.daysOfMonth.push(('0' + i).slice(-2))
        }
    }
    
    daySelector = (day:string) => {
        this.selectedDay = +day;
    }

    getStoreName = (storeName:string) => this.storeName=storeName;
    getSlotName = (startTime: number, endTime: number) => {
        this.slotName = `${startTime} - ${endTime}`
        console.log(this.slotName)
    };

    getStoreSlots = (storeId:string) => {
       this.selectedStoreId = storeId;
        const model: string = storeId;
        const myObserver = {
            next: x => x,
            error: err=> err
        }
        this._storeSlotsService.getSlots(model).subscribe(myObserver);
    }

    slotSelector = (slotNumber: string) => this.slotNumber = slotNumber


    submitHandler = () => {
        const modal=
        {
            slotNumber: this.slotNumber,
            selectedYear:this.selectedSlotYear,
            selectedMonth:this.selectedSlotMonth,
            selectedDay:this.selectedDay,
            selectedStore: this.selectedStoreId,
            storeName: this.storeName,
            slotName:this.slotName
        }
        const myObserver = {
            next: x => x,
            error: err=> err
        }
        if (!Object.keys(modal).every((key) => modal[key]))
        return this.formError=true;
        else this.formError = false;

        this.requestInProcess = true;
        
        this._createAppointmentService.bookAppointment(modal).subscribe(myObserver)
    }
    

}