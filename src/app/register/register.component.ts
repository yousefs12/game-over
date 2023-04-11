import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) {
    if (_AuthenticationService.isLogged) _Router.navigate(["home"])
  }

  registerError:String = "";

  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,30}/)])
  });

  register() {
    console.log("registering");

    this._AuthenticationService.register(this.registerForm.value).subscribe({
      next: (response:any) => {
        if (response.message == "success") {
          this._Router.navigate(["login"]);
        } else {
          this.registerError = response.message;
        }
      }
    })
  };
}
