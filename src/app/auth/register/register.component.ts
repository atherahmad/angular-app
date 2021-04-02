import { Component } from "@angular/core";

@Component({
    selector: 'app-auth-register',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent{
    nameTest: string = "Ather Ahmad";
    onNameChange=(event:Event)=>this.nameTest=(<HTMLInputElement>event.target).value
}