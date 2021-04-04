import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [
        './main.component.css',
        ]
})

export class MainComponent{
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