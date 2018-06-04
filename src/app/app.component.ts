import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sideNavOpened: boolean;
  envisioning: string = "Envisioning";

  menuClick(sideNav: MatSidenav): void {
    this.sideNavOpened = !this.sideNavOpened;
  }

  sideNavOpenEvent(): void {
    console.log("Wire up a sidenav OPEN event.");
  }

  sideNavClosedEvent(): void {
    console.log("Wire up a sidenav CLOSED event.");
  }
    
}



