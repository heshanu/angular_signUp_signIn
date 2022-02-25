import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface usernameAvliableResponse{
  available:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  usernameAvliable(username:string):any{
    this.http.post<{usernameAvliableResponse:any}>('https://api.angular-email.com/auth/username',{username});
  }
}
