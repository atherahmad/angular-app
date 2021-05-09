import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dateValidator } from 'src/app/shared/date-checker';
import { AppointmentDetailsService } from '../appointment-details.service';
import { SlotInterface } from './slot-interface';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  
  boxColor: string = "#11213b";
  headingText: string = "Edit Appointment";

  preSelectedStoreName: string;
  preSelectedDate: string;
  newSelectedDate: string;
  preSelectedStoreId: string;
  preSelectedSlotNumber:number;
  appointmentId: string;
  validDate: boolean = true;
  holiday: boolean = false;
  validSlot: boolean = true;
  


  constructor(private _appointmentDetailService: AppointmentDetailsService, private activatedRoute:ActivatedRoute, private route:Router) {

   }

  ngOnInit() {
    if(!localStorage.getItem("c2c-token")) this.route.navigateByUrl("/")
    this.appointmentId = this.activatedRoute.snapshot.paramMap.get('id');
    this._appointmentDetailService.getAppointmentDetails(this.appointmentId)
      .subscribe((data:any) => {
        if (data.status == "success") {
          this.preSelectedStoreName = data.message.storeName;
          this.preSelectedDate = data.message.appointmentDate;
          this.preSelectedSlotNumber = data.message.appoointmentSlot;
          this.preSelectedStoreId = data.message.storeId;
          
        }
      })
  }

  cancelUpdate = () => this.route.navigateByUrl("/dashboard")
  
  updateAppointment = () => console.log("update appointment")
  
  newDate = (date: string) => {
    this.newSelectedDate = date;
    let dateCheckResponse = dateValidator(date);
    this.validDate = dateCheckResponse.validDate;
    this.holiday = dateCheckResponse.holiday;
  }

  newSlotSelector = (slot: SlotInterface) => {
    console.log(this.preSelectedDate, "in new slot")
    let currentDate = new Date()
    let slotTimeDay = new Date()
    let selectedDateArray=this.newSelectedDate? this.newSelectedDate.split("/"): this.preSelectedDate.split("/")
 
    let selectAppointmentDate = new Date(+selectedDateArray[2], +selectedDateArray[1], +selectedDateArray[0])
    slotTimeDay.setHours(+`${slot.appointmentStartTime.slice(0, 2)}`, +`${slot.appointmentStartTime.slice(-2)}`, 0)
    if (slotTimeDay > currentDate && currentDate.getDate()==selectAppointmentDate.getDate()) this.validSlot=true
    else this.validSlot=false 
  }

}
