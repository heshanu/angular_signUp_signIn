import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MatchPasswordComponent } from './validators/match-password/match-password.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    MatchPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule
  ]
})
export class AuthModule { }
