import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']

})
export class NavbarComponent{
  activeAppointment='active';
  collapseScreenStatus:boolean = false;
  @Input() authorized:boolean;
  @ViewChild('linkRef') linkRef: ElementRef;

  


  constructor() {
 
  }
  navLinkSelector=(event)=>{
    this.activeAppointment = event.target.name;
    this.authorized=false
    

  }

  logoutHandler = () => {
    this.authorized = false;
    console.log(this.authorized);
  }


  onResize = (event) => {

    this.linkRef.nativeElement.getAttribute('data-toggle');

    if (event.target.innerWidth > 991)
      this.linkRef.nativeElement.setAttribute('data-toggle', '')
    else      
      this.linkRef.nativeElement.setAttribute('data-toggle', 'collapse')
  }
        
}