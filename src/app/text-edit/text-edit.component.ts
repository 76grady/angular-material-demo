import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.css']
})
export class TextEditComponent implements OnInit {
  @Input() title: string;
  @Input() maxCharacters: number

  textEditForm: FormGroup;
  textValue: string;
  active: boolean;
  
  get textArea(): AbstractControl {
    return this.textEditForm.controls['textArea'];
  }


  constructor(private fb: FormBuilder) { }



  ngOnInit() {
    this.initalizeForm();
  }

  onCardFocus(): void {
    this.active = true;
  }

  onCardBlur(): void {
    this.active = false; 
  }

  private initalizeForm(): void {
    this.textEditForm = this.fb.group({
      textArea: ['', [Validators.required, Validators.maxLength(this.maxCharacters)]]
    })
  }

}
