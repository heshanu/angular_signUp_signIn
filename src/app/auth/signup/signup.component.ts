import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators,ValidatorFn,AbstractControl,ValidationErrors } from '@angular/forms';
import { MatchPassword  } from '../validators/match-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm=new FormGroup({
    username:new FormControl('',[
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password:new FormControl(' ',[
      Validators.minLength(4),
      Validators.required,
      Validators.maxLength(20)
    ]),
    passwordConformation:new FormControl('',[
      Validators.minLength(4),
      Validators.required,
      Validators.maxLength(20)
    ])
  },{validators:[this.matchPassword.validate]}
);

  constructor(private matchPassword:MatchPassword) {}

  ngOnInit(): void {
  }
}
