import { Component, OnInit, ViewChild, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { TableItem, SampleData } from '../shared/sample-data';
import { MatDialog, MatTable, MatSlideToggle } from '@angular/material';
import { AddPrioirtyComponent } from '../add-prioirty/add-prioirty.component';


@Component({
  selector: 'app-priorities-grid',
  templateUrl: './priorities-grid.component.html',
  styleUrls: ['./priorities-grid.component.css']
})
export class PrioritiesGridComponent implements OnInit {
  @Input() tableItems: TableItem[]

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSlideToggle) modalSwitch: MatSlideToggle;
  @Output() createPriority: EventEmitter<null> = new EventEmitter<null>();
  @Output() editPriorityEvent: EventEmitter<TableItem> = new EventEmitter<TableItem>();
  
  innerWidth: number;

  displayedColumns = ['color', 'title', 'description', 'edit' ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  addPriority() {
    if (this.modalSwitch.checked) {
      this.openModal();
    } else {
      this.createPriority.emit(null);
    }
  }

  insertPriority(item :TableItem) {
    this.tableItems.push(item);
    this.table.renderRows();
  }

  editPriority(item: TableItem): void {
    this.editPriorityEvent.emit(item);
  }

  private openModal() {
    let dialogRef = this.dialog.open(AddPrioirtyComponent, {
      width: '40em',
      data: { }, 
      hasBackdrop: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result !== undefined) {
        this.insertPriority(new TableItem(result.priorityTitle, result.priorityDescription, result.priorityInit));
      }
    });
  }

}
