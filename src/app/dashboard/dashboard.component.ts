import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',
        ]
})

export class DashboardComponent{
    servers = ['First Server', 'Second Server'];
    serverName: string;
    showHiddenText: boolean = false;
    timeStamps = [];

    createServer = () => this.servers.push(this.serverName);
    toggleText = () => {
        this.showHiddenText = !this.showHiddenText;
        this.timeStamps.push(Date())
        console.log(this.timeStamps)
    }
}