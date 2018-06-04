import { Component, OnInit } from '@angular/core';
import { MainMenuItem, SampleData } from '../shared/sample-data';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  mainMenuItems: MainMenuItem[] = SampleData.mainMenuItems();

  constructor() { }

  ngOnInit() {
  }

}
