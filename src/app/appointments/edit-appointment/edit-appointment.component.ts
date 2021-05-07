import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentDetailsService } from '../appointment-details.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  
  boxColor: string = "#11213b";
  headingText: string = "Edit Appointment";
  selectedStore: string;
  preSelectedMonth: number;
  preSelectedYear: number;
  preSelectedDay: number;
  storeId: string;
  preSelectedSlotNumber;
  appointmentId: string;


  constructor(private _appointmentDetailService: AppointmentDetailsService, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this.appointmentId = this.activatedRoute.snapshot.paramMap.get('id');
    this._appointmentDetailService.getAppointmentDetails(this.appointmentId)
      .subscribe((data:any) => {
        console.log(data)
        if (data.status == "success") {
          console.log(data.message, "store name")
          this.selectedStore = data.message.storeName
          this.preSelectedSlotNumber = data.message.appoointmentSlot
          
        }
      })
  }

}
