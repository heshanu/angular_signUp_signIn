import { Injectable } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable,map,catchError, of } from "rxjs";

import { AuthService } from "../auth.service";

@Injectable({
    providedIn:'root'
})
export class UniqueUsername implements AsyncValidator {
    
    constructor(private authService:AuthService){}    
    validate = (control:FormControl):any=>{
        const {value}=control;

        return this.authService.usernameAvliable(value)
        .pipe(
            map(value=>{
                if(value.available){
                    return null;
                }
            })
        ),catchError(err=>{
            if(err.message.username){
                return of({nonUniqueUsername:true});
            }else{
                return of({noConnection:true});
            }
        });
    };
}
