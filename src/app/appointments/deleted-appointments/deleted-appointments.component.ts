import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { DeletedAppointmentsService } from './deleted-appointments.service';

@Component({
  selector: 'app-deleted-appointments',
  templateUrl: './deleted-appointments.component.html',
  styleUrls: ['./deleted-appointments.component.css']
})
export class DeletedAppointmentsComponent implements OnInit {

  boxColor: string = "#11213b";
  headingText: string = "Deleted Appointments";
  appointmentsList: Array<any> = [];

  constructor(private router:Router, private authService:AuthenticationService, private _deletedAppointmentService:DeletedAppointmentsService){}

  ngOnInit(): void{
    if (!localStorage.getItem("c2c-token")) this.router.navigateByUrl("/")
    
    else {
 
      this.authService.verifyUser().subscribe();
      this._deletedAppointmentService.deletedAppointments().subscribe();

      this._deletedAppointmentService.deletedAppointmentsObserver$
        .subscribe(data => {
          if (data.status === "success") this.appointmentsList = data.message

        })     
        }
       
       
    } 


}
