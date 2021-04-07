import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title:string;
  authorized: boolean = false;
  
  setAuthorized = () => this.authorized = true;
  setUnAuthorized = () => this.authorized = false;
  
}
