import { Component } from "@angular/core";
import { StoreslotsService } from "src/app/services/store/storeslots.service";
import { StoreService } from "../../services/store/store.service";

@Component({
    selector: 'app-appointment-create',
    templateUrl: './create.component.html',
    styleUrls:['./create.component.css']
})
export class CreateAppointment{
    public stores: Array<any> = [];
    leapYearCheck: boolean = false;
    selectedMonth: number;
    daysOfMonth: Array<string> = [];
    years: Array<number> = [];
    selectedStoreId: string = "";
    arrayOfSlots: Array<any> = [];

    test: object = {
        store: "",
        year: "",
        month: "",
        day: "",
        soltNumber:"",
    }
    
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

    constructor(private _storeService: StoreService, private _storeSlotsService: StoreslotsService) {
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
    getStoreSlots = (storeId: string) => {
        this.selectedStoreId = storeId;
        const model: string = storeId;
        const myObserver = {
            next: x => x,
            error: err=> err
        }
        this._storeSlotsService.getSlots(model).subscribe(myObserver);
    }

}