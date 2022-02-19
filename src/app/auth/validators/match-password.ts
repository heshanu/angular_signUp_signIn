import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
@Injectable({providedIn:'root'})
export class MatchPassword {
    validate(formGroup:AbstractControl):ValidationErrors|null{
        const {password,passwordConformation} =formGroup.value;
        if(password===passwordConformation){
            return null;
        }else{
            return {passwordDontMatch:true};
        }
    }
}

