import { Component, OnInit } from '@angular/core';
import { HeadingService } from 'src/app/shared/heading/heading.service';

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


  constructor(private heading: HeadingService) { }

  ngOnInit() {


  }

}
