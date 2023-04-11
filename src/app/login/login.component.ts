import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) {
    if (_AuthenticationService.isLogged) _Router.navigate(["home"])
  }

  loginError:String = "";

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  login() {
    this._AuthenticationService.login(this.loginForm.value).subscribe({
      next: (response:any) => {
        if (response.message == "success") {
          this._AuthenticationService.isLogged.next(true);
          this._AuthenticationService.userToken = response.token;
          localStorage.setItem("userToken", response.token);
          this._Router.navigate(["home"]);
        } else {
          this.loginError = response.message;
        }
      }
    })
  };
}
