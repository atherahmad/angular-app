import { Component, Input, OnInit } from '@angular/core';
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
  validSlot: boolean = true;
  constructor(private _storeSlotsService: StoreslotsService) { }

  ngOnInit() {
    this._storeSlotsService.storeSlotsObserver$
            .subscribe(data => { 
              this.arrayOfSlots = data
            })
    const model: string = this.storeId;
    this._storeSlotsService.getSlots(model).subscribe()
  }
  slotSelector = (slot: string) => {
    let currentDate = new Date()
    let slotTimeDay = new Date()
    slotTimeDay.setHours(+`${slot.slice(0, 2)}`, +`${slot.slice(-2)}`, 0)
    if (slotTimeDay > currentDate) this.validSlot=true
    else this.validSlot=false

  }

}
