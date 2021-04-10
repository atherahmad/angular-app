import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DashboardService } from "./dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',
        ]
})

export class DashboardComponent{
    servers = ['First Server', 'Second Server'];
    serverName: string;
    showHiddenText: boolean = false;
    timeStamps = [];
    appointmentsList:Array<any>=[]

    constructor(private _userDashboardService: DashboardService, private router:Router) { }
    
    ngOnInit(): void {
        this._userDashboardService.userAppointmentsObserver$
        .subscribe(
            (appointments) => {
            if (appointments.status == "success")
            {
                this.appointmentsList = appointments.message
            }
            else {
                console.log(appointments, "appointments failed")
              }
                }
            
        )
        const myObserver = {
            next: x => x,
            error: err => err,
          };
            this._userDashboardService.getAppointments().subscribe(myObserver)


      
      }
    
    createServer = () => this.servers.push(this.serverName);
    toggleText = () => {
        this.showHiddenText = !this.showHiddenText;
        this.timeStamps.push(Date())
        console.log(this.timeStamps)
    }

    editAppointment = (appointmentId:string) => {
        this.router.navigateByUrl(`/appointment/edit/${appointmentId}`)
        console.log(appointmentId,"id on edit")
    }
}