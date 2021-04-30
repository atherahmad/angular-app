import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeslot'
})
export class TimeslotPipe implements PipeTransform {

  startTime: string;
  endTime: string;
  slotArray: Array<any>;

  transform(value: any, args?: any): any {


    this.slotArray = (value.split(" "))
    if (this.slotArray[0].length < 4) this.slotArray[0] = '0' + this.slotArray[0];
    if (this.slotArray[2].length < 4) this.slotArray[2] = '0' + this.slotArray[2];



    return this.slotArray.join('');
  }

}
