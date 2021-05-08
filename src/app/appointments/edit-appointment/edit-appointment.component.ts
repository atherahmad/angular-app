import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentDetailsService } from '../appointment-details.service';

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
  preSelectedStoreId: string;
  preSelectedSlotNumber:number;
  appointmentId: string;
  


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
  
  updateAppointment=()=>console.log("update appointment")

}
