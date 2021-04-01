import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']

})
export class NavbarComponent{
  activeAppointment='active';

  navLinkSelector=(event)=>{
      this.activeAppointment=event.target.name

  }
        
}