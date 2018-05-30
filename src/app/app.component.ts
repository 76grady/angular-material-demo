import { Component, OnInit } from '@angular/core';
import { ItemTemplate } from './models/item-template';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  readonly descriptionMaxLength = 20;
  readonly titleMaxLength = 20;
  title = 'app';
  buttons: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24]
  textValue: string = '';
  selectItems: ItemTemplate[] = [];
  priorityForm: FormGroup;
  forbiddenChar = 'b';

 
  constructor(private fb: FormBuilder ) {
    this.selectItems.push(new ItemTemplate('home', 'Home Option', 'This is the option to go home.', "blue"));
    this.selectItems.push(new ItemTemplate('delete', 'Delete Option', 'We can delete things like crazy.', "red"));
    this.selectItems.push(new ItemTemplate('check', 'Check Option', 'Go ahead and select what you need.', "green"));    
  }

  get priorityTitle() { return this.priorityForm.get('priorityTitle'); }

  get priorityDescription() {return this.priorityForm.get('priorityDescription'); }

  ngOnInit() {
    this.initializeForm();
  }

  saveButton() {
    
  }

  clickCancelButton() {
    this.initializeForm();
  }

  private initializeForm() {
    this.priorityForm = this.fb.group({
      priorityDescription: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength), forbiddenCharValidator(this.forbiddenChar)] ],
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


export function forbiddenCharValidator(forbiddenChars: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = control.value.indexOf(forbiddenChars) !== -1;
    return forbidden ? {'forbiddenChar': {value: control.value}} : null;
  };
}
