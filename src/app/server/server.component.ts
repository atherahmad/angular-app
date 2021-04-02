import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{

    serverId:number = 2020;
    serverStatus:string = 'Offline';
    addNewServer:boolean = false;

    getServerStatus = () => this.serverStatus

    getServerId = (a) => {
        console.log("Server id is ", a)
        return a
    }
    constructor(){
        setTimeout(() => this.addNewServer=true, 2000);
    }
    
}