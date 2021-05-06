import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DeleteAppointmentService } from "../appointments/delete-appointment.service";
import { DialogueBoxComponent } from "../shared/dialogue-box/dialogue-box.component";
import { DashboardService } from "./dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',
        ]
})

export class DashboardComponent{

    boxColor: string = "#11213b";
    headingText: string = "Active Appointments";
    servers = ['First Server', 'Second Server'];
    serverName: string;
    showHiddenText: boolean = false;
    timeStamps = [];
    appointmentsList:Array<any>=[]

    constructor(private _userDashboardService: DashboardService, private router:Router, public dialog: MatDialog) { }
    
    ngOnInit(): void {
        this._userDashboardService.userAppointmentsObserver$
        .subscribe(
            (appointments) => {
            if (appointments.status == "success")
            {
                this.appointmentsList = appointments.message
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

    editAppointment = (appointmentId: string) => {
       
        this.router.navigateByUrl(`/appointment/edit/${appointmentId}`)
  
    }

    openDialog(id: string) {
        
        const dialogRef=this.dialog.open(DialogueBoxComponent, {
            data: {
                id
            }
        })
        dialogRef.
            afterClosed().subscribe(result => {
            if(result.status == 'success'){
                this.appointmentsList = this.appointmentsList.filter(appointment => appointment._id != result.id);
                console.log("appointments after filter", this.appointmentsList)
            }
          });
        }
    }
