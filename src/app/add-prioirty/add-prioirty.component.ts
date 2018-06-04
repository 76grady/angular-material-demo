import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/validators';
import { SampleData, SelectItemTemplate, TableItem, ColorSelect } from '../shared/sample-data';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-prioirty',
  templateUrl: './add-prioirty.component.html',
  styleUrls: ['./add-prioirty.component.css']
})
export class AddPrioirtyComponent implements OnInit {
  readonly descriptionMaxLength = 100;
  readonly titleMaxLength = 50;
 
  
  selectItems: ColorSelect[] = SampleData.colorItems();
  priorityForm: FormGroup;
  priority: TableItem;

  selectedValue: ColorSelect = new ColorSelect('','');

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddPrioirtyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  get priorityTitle() { return this.priorityForm.get('priorityTitle'); }

  get priorityDescription() {return this.priorityForm.get('priorityDescription'); }

  ngOnInit() {
    this.initializeForm();
  }
  
  clickCancelButton() {
    this.initializeForm();
    this.dialogRef.close();
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

  private resetForm() {
    this.priorityForm.setValue({
      priorityDescription: '',
      priorityInit: '',
      priorityTitle: ''
    });
  }

}
