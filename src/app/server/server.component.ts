import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{

    serverId:number = 2020;
    serverStatus:string = 'Offline';
    addNewServer:boolean = false;

    getServerStatus = () => this.serverStatus

    getServerId = (a) => a
    
    constructor() {
        this.serverStatus = Math.random()>0.5 ? 'online' : 'offline'
        setTimeout(() => this.addNewServer=true, 2000);
    }

    getColor = () => this.serverStatus === 'online' ? 'green' : 'red';
    
}