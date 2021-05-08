import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-select',
  templateUrl: './store-select.component.html',
  styleUrls: ['./store-select.component.css']
})
export class StoreSelectComponent implements OnInit {

  @Input() preSelectedStoreName: string;
  @Input() preSelectedStoreId: string;

  constructor() {
    
   }

  ngOnInit() {
  
  }


}
