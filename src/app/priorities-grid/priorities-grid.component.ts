import { Component, OnInit, ViewChild } from '@angular/core';
import { TableItem, SampleData } from '../shared/sample-data';
import { MatDialog, MatTable } from '@angular/material';
import { AddPrioirtyComponent } from '../add-prioirty/add-prioirty.component';

@Component({
  selector: 'app-priorities-grid',
  templateUrl: './priorities-grid.component.html',
  styleUrls: ['./priorities-grid.component.css']
})
export class PrioritiesGridComponent implements OnInit {
  tableItems: TableItem[] = SampleData.tableItems();
  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns = ['color', 'title', 'description', 'edit' ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addPriority() {
    let dialogRef = this.dialog.open(AddPrioirtyComponent, {
      width: '40em',
      data: { }, 
      hasBackdrop: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result !== undefined) {
        this.tableItems.push(new TableItem(result.priorityTitle, result.priorityDescription, result.priorityInit));
        this.table.renderRows();
      }
    });

  }

}
