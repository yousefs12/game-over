import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private _AuthenticationService: AuthenticationService) {
    _AuthenticationService.isLogged.subscribe({
      next: () => {
        this.isLogged = _AuthenticationService.isLogged.value;
      }
    })
  }

  isLogged:Boolean = false;

  logout() {
    this._AuthenticationService.logout();
  }

}
