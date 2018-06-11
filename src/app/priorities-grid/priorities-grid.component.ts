import { Component, OnInit, ViewChild, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { TableItem, SampleData } from '../shared/sample-data';
import { MatDialog, MatTable, MatSlideToggle, MatPaginator, MatTableDataSource, MatButtonToggleGroup } from '@angular/material';
import { AddPrioirtyComponent } from '../add-prioirty/add-prioirty.component';


@Component({
  selector: 'app-priorities-grid',
  templateUrl: './priorities-grid.component.html',
  styleUrls: ['./priorities-grid.component.css']
})
export class PrioritiesGridComponent implements OnInit {
  @Input() tableItems: TableItem[];

  @ViewChild(MatTable) table: MatTable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSlideToggle) modalSwitch: MatSlideToggle;
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @Output() createPriority: EventEmitter<null> = new EventEmitter<null>();
  @Output() editPriorityEvent: EventEmitter<TableItem> = new EventEmitter<TableItem>();

  dataSource: any;
  innerWidth: number;

  displayedColumns = ['color', 'title', 'description', 'edit' ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // monitor the width of the component
    this.innerWidth = window.innerWidth;

    // set the button toggle group to default to table
    this.group.value = 'table';

    // set the datapager
    this.dataSource = new MatTableDataSource<TableItem>(this.tableItems);
    this.dataSource.paginator = this.paginator;

    console.log(this.dataSource);
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

  insertPriority(item: TableItem) {
    this.tableItems.push(item);
    this.table.renderRows();
  }

  editPriority(item: TableItem): void {
    this.editPriorityEvent.emit(item);
  }

  private openModal() {
    const dialogRef = this.dialog.open(AddPrioirtyComponent, {
      width: '40em',
      data: { },
      hasBackdrop: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.insertPriority(new TableItem(result.priorityTitle, result.priorityDescription, result.priorityInit));
      }
    });
  }

}
