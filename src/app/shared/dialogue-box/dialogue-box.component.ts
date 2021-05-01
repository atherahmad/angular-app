import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent {

  constructor(public dialog: MatDialog) { }

  closeDialog() {
    this.dialog.closeAll();
}

}
