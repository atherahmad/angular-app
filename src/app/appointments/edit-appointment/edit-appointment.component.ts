import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  
  headingText: string = "Edit Appointment";
  boxColor: string = "#11213b";

  constructor() { }

  ngOnInit() {
  }

}
