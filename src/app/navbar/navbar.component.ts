import { Component, Input } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']

})
export class NavbarComponent{
  activeAppointment='active';
  @Input() authorized:boolean;
 

  navLinkSelector=(event)=>{
      this.activeAppointment=event.target.name;

  }

  loginHandler=()=>this.authorized=true
  logoutHandler=()=>this.authorized=false
        
}