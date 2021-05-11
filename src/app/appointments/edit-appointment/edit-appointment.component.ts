import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dateValidator } from 'src/app/shared/date-checker';
import { slotValidator } from 'src/app/shared/slotValidator';
import { AppointmentDetailsService } from '../appointment-details.service';
import { AppoinmentInterface } from './appoinment-interface';
import { SlotInterface } from './slot-interface';
import { UpdateAppointmentService } from './update-appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  
  boxColor: string = "#11213b";
  headingText: string = "Edit Appointment";


  appointmentId: string;
  validDate: boolean = true;
  holiday: boolean = false;
  validSlot: boolean = true;
  preSelectedAppointment: AppoinmentInterface;
  selectedSlot: SlotInterface;
  requestInProcess: boolean = false;
  updateError: boolean = false;
  errorText: string;
  

  constructor(private _appointmentDetailService: AppointmentDetailsService, private activatedRoute:ActivatedRoute, private route:Router,private _updateAppointmentService:UpdateAppointmentService) {

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
    {  
    let modal = {
      _id: this.preSelectedAppointment._id,
      appointmentDate: this.preSelectedAppointment.appointmentDate,
      appoointmentSlot: this.preSelectedAppointment.appoointmentSlot,
      slotName:this.preSelectedAppointment.slotName
      }
      this.requestInProcess = true;
      this._updateAppointmentService.updateAppointment(modal).subscribe((data: any) => {
        if (data.status == "success") {
          this.requestInProcess = false
          this.route.navigateByUrl("/dashboard")
        }
        else {
          this.requestInProcess = false;
          this.updateError = true;
          this.errorText=data.message
        }
      })
    }
    else console.log("invalid data correct the errors", this.preSelectedAppointment)
  }
  
  newDate = (date: string) => {
    this.preSelectedAppointment.appointmentDate = date;
    let dateArray = date.split("/");
    let dateCheckResponse = dateValidator(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);
    this.validDate = dateCheckResponse.validDate;
    this.holiday = dateCheckResponse.holiday;
    this.validSlot = slotValidator(this.preSelectedAppointment, this.selectedSlot)
    console.log(this.holiday, this.validDate)
  }

  newSlotSelector = (slot: SlotInterface) => {
    this.preSelectedAppointment.appoointmentSlot = slot.slotNumber;
    this.preSelectedAppointment.slotName = `${slot.appointmentStartTime} - ${slot.appointmentEndTime}`;
    this.selectedSlot = slot;
    this.validSlot=slotValidator(this.preSelectedAppointment,slot)
  }

}
