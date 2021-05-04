import {Component, Inject} from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteAppointmentService } from 'src/app/appointments/delete-appointment.service';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent {

  inProcess: boolean = false;
  errorText: string = "";


  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string}, public dialog: MatDialogRef<DialogueBoxComponent>, private _deleteService:DeleteAppointmentService) { }
  
  ngOnInit() {
    this._deleteService.appointmentObserver$
      .subscribe(status => {
        
        this.inProcess = false;
        if (status == "success") {
          this.dialog.close({status:"success", id:this.data.id})
        }
        else this.errorText = status;
      })
  }

  closeDialog = () => this.dialog.close();
  
  deleteAppointment = () => {
    const modal = {
      appointmentId:this.data.id
    }
    this._deleteService.deleteAppointment(modal).subscribe()
  }

}
