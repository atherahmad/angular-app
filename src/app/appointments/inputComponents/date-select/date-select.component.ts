import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.css']
})
export class DateSelectComponent implements OnInit {

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

  constructor() {
    for (let i = 1; i < 31; i++){
      this.years.push(2020 + i);
  }
  }

  ngOnInit() {
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
}
