import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dateValidator } from 'src/app/shared/date-checker';
import { AppointmentDetailsService } from '../appointment-details.service';
import { AppoinmentInterface } from './appoinment-interface';
import { SlotInterface } from './slot-interface';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  
  boxColor: string = "#11213b";
  headingText: string = "Edit Appointment";


  newSelectedDate: string;
  appointmentId: string;
  validDate: boolean = true;
  holiday: boolean = false;
  validSlot: boolean = true;
  preSelectedAppointment: AppoinmentInterface;
  

  constructor(private _appointmentDetailService: AppointmentDetailsService, private activatedRoute:ActivatedRoute, private route:Router) {

   }

  ngOnInit() {
    if(!localStorage.getItem("c2c-token")) this.route.navigateByUrl("/")
    this.appointmentId = this.activatedRoute.snapshot.paramMap.get('id');
    this._appointmentDetailService.getAppointmentDetails(this.appointmentId)
      .subscribe((data:any) => {
        if (data.status == "success") {
          
          this.preSelectedAppointment = data.message
          console.log(this.preSelectedAppointment)
          
        }
      })
  }

  cancelUpdate = () => this.route.navigateByUrl("/dashboard")
  
  updateAppointment = () => {
    if(this.validDate && !this.holiday && this.validSlot)
      console.log("update appointment", this.preSelectedAppointment)
    
    else console.log("invalid data correct the errors", this.preSelectedAppointment)
  }
  
  newDate = (date: string) => {
    this.preSelectedAppointment.appointmentDate = date;
    let dateCheckResponse = dateValidator(date);
    this.validDate = dateCheckResponse.validDate;
    this.holiday = dateCheckResponse.holiday;
  }

  newSlotSelector = (slot: SlotInterface) => {
    
    let currentDate = new Date();
    this.preSelectedAppointment.appoointmentSlot = slot.slotNumber;
    let dateArray = this.preSelectedAppointment.appointmentDate.split("/");
    let selectedAppointmentDate = new Date(+dateArray[2], +dateArray[1]-1, +dateArray[0]);
    selectedAppointmentDate.setHours(+`${slot.appointmentStartTime.slice(0, 2)}`);
    selectedAppointmentDate.setMinutes(+`${slot.appointmentStartTime.slice(-2)}`);

  if (selectedAppointmentDate.getFullYear() > currentDate.getFullYear()) this.validSlot=true
    else if (selectedAppointmentDate.getFullYear() < currentDate.getFullYear()) this.validSlot=false
      else{
        if (selectedAppointmentDate.getMonth() > currentDate.getMonth()) this.validSlot=true
        else if (selectedAppointmentDate.getMonth() < currentDate.getMonth()) this.validSlot=false

        else {
          if (selectedAppointmentDate.getDate() > currentDate.getDate()) this.validSlot=true
          else if (selectedAppointmentDate.getDate() < currentDate.getDate()) this.validSlot=false

          else {
            if (selectedAppointmentDate.getHours() > currentDate.getHours()) this.validSlot=true
              else if (selectedAppointmentDate.getHours() < currentDate.getHours()) this.validSlot=false
            else {
                  if (selectedAppointmentDate.getMinutes() > currentDate.getMinutes()) this.validSlot=true
                    else if (selectedAppointmentDate.getMinutes() < currentDate.getMinutes()) this.validSlot=false
            }
        }

      }


      }

  
  }

}
