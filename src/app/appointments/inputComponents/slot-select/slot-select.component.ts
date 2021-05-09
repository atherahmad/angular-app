import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreslotsService } from 'src/app/services/store/storeslots.service';

@Component({
  selector: 'app-slot-select',
  templateUrl: './slot-select.component.html',
  styleUrls: ['./slot-select.component.css']
})
export class SlotSelectComponent implements OnInit {

  arrayOfSlots: Array<any> = [];
  @Input() storeId: string;
  @Input() preSelectedSlotNumber: number;
  @Output() newSlotEvent = new EventEmitter<object>();
  
  constructor(private _storeSlotsService: StoreslotsService) { }

  ngOnInit() {
    this._storeSlotsService.storeSlotsObserver$
            .subscribe(data => { 
              this.arrayOfSlots = data
            })
    const model: string = this.storeId;
    this._storeSlotsService.getSlots(model).subscribe()
  }
  updateSlot = (slot: object) => {
    this.newSlotEvent.emit(slot)
  }

}
