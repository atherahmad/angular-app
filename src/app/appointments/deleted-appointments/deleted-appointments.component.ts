import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-deleted-appointments',
  templateUrl: './deleted-appointments.component.html',
  styleUrls: ['./deleted-appointments.component.css']
})
export class DeletedAppointmentsComponent implements OnInit {

  constructor(private router:Router, private authService:AuthenticationService){}

     ngOnInit(): void{
        if (localStorage.getItem("c2c-token")) {
            const myObserver = {
                next: x => x,
                error: err => err,
              };
            this.authService.verifyUser().subscribe(myObserver)
        }
    } 


}
