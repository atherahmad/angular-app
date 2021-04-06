import { Component } from "@angular/core";
import { StoreService } from "src/app/store.service";

@Component({
    selector: 'app-appointment-create',
    templateUrl: './create.component.html',
    styleUrls:['./create.component.css']
})
export class CreateAppointment{
    public stores = [];
    leapYearCheck: boolean = false;
    selectedMonth: number;
    daysOfMonth: Array<string> = [];
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

    timeSlots: object = [
        {
            id: 1,
            slot: "test"
        }
    ];
    arrayOfSlots: Array<any> = [];

    timeSloter(startTime: string, closeTime: string, slotDuration: string) {

        let slotArray: Array<string>;
 
        let b = 1;
        let numberOfSlots = (((+closeTime % 100) + Math.floor(((+closeTime - (+closeTime % 100)) / 100) * 60)) - ((+startTime % 100) + Math.floor(((+startTime - (+startTime % 100)) / 100) * 60))) / +slotDuration;

        let tempTime = +startTime;
        let endTime;
        
        for (let i = 1; i <= numberOfSlots; i++) {

            if (((tempTime + +slotDuration) % 100) >= 60) {
                endTime=(((tempTime + +slotDuration) % 100) - 60) + (100-((tempTime + +slotDuration) % 100)) + (tempTime+ +slotDuration)
            }
            else
            endTime=tempTime+ +slotDuration
            this.arrayOfSlots.push({ start: tempTime, end: `${endTime}` });
            tempTime=endTime


    }

        console.log(numberOfSlots, "it is  no of slot")
        console.log(this.arrayOfSlots, "it is  no of slot")


        return slotArray
        
    }

    
    years: Array<number> =[]

    constructor(private _storeService: StoreService) {
        for (let i = 1; i < 31; i++){
            this.years.push(2020 + i);
        }

        this.timeSloter('0845','1430','20')
     }
    
    ngOnInit() {
        this._storeService.getStores()
            .subscribe((data) => this.stores = data);
    }

    log = (event: Text) => {
        console.log()
    }
    yearSelector = (year:string) => {
        if (+year % 4 == 1) this.leapYearCheck = true;
        else this.leapYearCheck = false;
        this.monthSelector(this.selectedMonth);
    }
    monthSelector = (month: number) => {
        this.daysOfMonth = [];
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
}