import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: '<app-server></app-server>',
  templateUrl:'servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowNewServer = false;
  serveCreationStatus= 'No server was created!';
  serverName ='TestServer';


  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  onCreateServer(){
    this.serveCreationStatus='server was created';
  }
  onUpdateServerName(event:any){
    this.serverName =(<HTMLInputElement>event.target).value
  }
}
