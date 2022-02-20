import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable,map,catchError, of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class UniqueUsername implements AsyncValidator {
    
constructor(private http:HttpClient){}    
    validate = (control:AbstractControl):any=>{
        const {value}=control;

        return this.http.post<any>('https://api.angular-email.com/auth/username',{
            username:value
        }).pipe(
            map(value=>{
                return null;
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
