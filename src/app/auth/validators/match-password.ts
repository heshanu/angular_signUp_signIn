import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class MatchPassword implements ValidationErrors{
    validate(formGroup:AbstractControl):any{
        const {password,passwordConformation} =formGroup.value;
        if(password===passwordConformation){
            return null;
        }else{
            return {passwordDontMatch:true};
        }
    }
}

