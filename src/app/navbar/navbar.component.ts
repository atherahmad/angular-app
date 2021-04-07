import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

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

  


  constructor(private router:Router) {
 
  }
  navLinkSelector = (event) => {
    console.log(event.name)
    
    this.activeAppointment = event.name;    
  }

  logoutHandler = () => {
    this.setUnAuthorized();
    this.router.navigateByUrl('/');
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