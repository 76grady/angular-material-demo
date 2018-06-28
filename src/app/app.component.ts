import { Component, OnInit, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import { MatSidenav, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { TableItem, SampleData } from './shared/sample-data';
import { AddPrioritySidebarComponent } from './add-priority-sidebar/add-priority-sidebar.component';
import { PrioritiesGridComponent } from './priorities-grid/priorities-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(PrioritiesGridComponent) prioritiesGridComponent: PrioritiesGridComponent;
  tableItems: TableItem[] = SampleData.tableItems();

  sideNavOpened: boolean;

  formSideNavOpened: boolean;
  priorityAddForm: boolean;
  priorityToEdit: TableItem;
  snackBarXPosition: MatSnackBarHorizontalPosition = 'start';
  snackBarYPosition: MatSnackBarVerticalPosition = 'top';

  drawerVisible: boolean = window.innerWidth > 750;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.drawerVisible = window.innerWidth > 750;
  }

  constructor(public snackBar: MatSnackBar) {
  }

  menuClick(sideNav: MatSidenav): void {
    this.sideNavOpened = !this.sideNavOpened;
  }

  sideNavOpenEvent(): void {
    console.log('Wire up a sidenav OPEN event.');
  }

  sideNavClosedEvent(): void {
    console.log('Wire up a sidenav CLOSED event.');
  }

  addPriority(item: TableItem) {
    console.log(item);
    this.formSideNavOpened = true;
    this.priorityAddForm = true;
    this.priorityToEdit = item;
  }

  savePriority(value: [TableItem, boolean]) {
    this.formSideNavOpened = false;
    // if the form let us leave with a validated value, we need to save it.
    if (value[0] !== null) {
      this.tableItems.push(value[0]);
      this.prioritiesGridComponent.table.renderRows();
      this.snackBar.open('Priority Added', 'Do Something', {
        duration: 2000,
        horizontalPosition: this.snackBarXPosition,
        verticalPosition: this.snackBarYPosition
      });
    }
  }

}
