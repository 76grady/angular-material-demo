import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableItem, ColorSelect, SampleData } from '../shared/sample-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/validators';

@Component({
  selector: 'app-add-priority-sidebar',
  templateUrl: './add-priority-sidebar.component.html',
  styleUrls: ['./add-priority-sidebar.component.css']
})
export class AddPrioritySidebarComponent implements OnInit {
  @Input() priorityToEdit: TableItem;
  @Output() closeSidebar: EventEmitter<[TableItem, Boolean]> = new EventEmitter<[TableItem, Boolean]>();
  
  readonly descriptionMaxLength = 100;
  readonly titleMaxLength = 50;
  editMode: boolean;
  
  priorityForm: FormGroup;
  selectItems: ColorSelect[] = SampleData.colorItems();
  
  get priorityTitle() { return this.priorityForm.get('priorityTitle'); }
  get priorityDescription() {return this.priorityForm.get('priorityDescription'); }

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
    if (this.priorityToEdit) {
      console.log('edit mode!');
      this.editMode = true;
      this.patchPriority();
    } else {
      this.editMode = false;
    }
  }

  clickCancelButton() {
    // this.priorityForm.reset();
    console.log('click closed');
    this.closeSidebar.emit([null, false]);
  }

  savePriority() {
    this.closeSidebar.emit([
      new TableItem(
        this.priorityForm.value.priorityTitle,
        this.priorityForm.value.priorityDescription,
        this.priorityForm.value.priorityInit ),
      this.editMode]);
  }

  private initializeForm() {
    this.priorityForm = this.fb.group({
      priorityDescription: ['', [Validators.required, 
        Validators.maxLength(this.descriptionMaxLength), 
        CustomValidators.forbiddenCharValidator('b')]],
      priorityInit: ['', Validators.required ],
      priorityTitle: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)] ]
    });
  }

  private patchPriority() {
    this.priorityForm.patchValue({
      priorityDescription: this.priorityToEdit.description,
      priorityInit: this.priorityToEdit.color,
      priorityTitle: this.priorityToEdit.title
    });

  }

  private resetForm() {
    this.priorityForm.setValue({
      priorityDescription: '',
      priorityInit: '',
      priorityTitle: ''
    });
  }

}
