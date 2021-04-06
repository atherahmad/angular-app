import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  authorized: boolean = false;
  
  parentFunction(data:boolean) {
    console.log("parent function called ", data)
  }
}
