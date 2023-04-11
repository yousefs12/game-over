import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem("userToken")) {
      this.userToken = localStorage.getItem("userToken");
      this.isLogged.next(true);
    } else {
      this.isLogged.next(false);
    }
  }

  isLogged = new BehaviorSubject(false);
  userToken:any = "";
  baseUrl = "https://route-movies-api.vercel.app/";

  login(user:Object) {
    return this._HttpClient.post(this.baseUrl + "signin", user);
  }

  register(user:Object) {
    return this._HttpClient.post(this.baseUrl + "signup", user);
  }

  logout() {
    this.isLogged.next(false);
    this.userToken = "";
    localStorage.setItem("userToken", this.userToken);
  }
}
