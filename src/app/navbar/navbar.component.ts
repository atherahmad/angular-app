import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']

})
export class NavbarComponent{
  activeAppointment='home';
  collapseScreenStatus:boolean = false;
  @Input() authorized: boolean;
  @Input() setAuthorized: () => void;
  @Input() setUnAuthorized: () => void;



  @ViewChild('linkRef') linkRef: ElementRef;

  


  constructor() {
 
  }
  navLinkSelector = (event) => {
    console.log(event.name)
    
    this.activeAppointment = event.name;    
  }

  logoutHandler = () => {
    this.setUnAuthorized();
    localStorage.removeItem("c2c-token")
  }


  onResize = (event) => {

    this.linkRef.nativeElement.getAttribute('data-toggle');

    if (event.target.innerWidth > 991)
      this.linkRef.nativeElement.setAttribute('data-toggle', '')
    else      
      this.linkRef.nativeElement.setAttribute('data-toggle', 'collapse')
  }
        
}