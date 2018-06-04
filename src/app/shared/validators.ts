import { ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators {
            
    static forbiddenCharValidator(forbiddenChars: string): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
          const forbidden = control.value.indexOf(forbiddenChars) !== -1;
          return forbidden ? {'forbiddenChar': {value: control.value}} : null;
        };
    };
    
}