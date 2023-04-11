import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './authentication.guard';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", canActivate:[AuthenticationGuard], component: HomeComponent},
  {path: "games/:param/:value", canActivate:[AuthenticationGuard], component: GamesComponent},
  {path: "game-details/:id", canActivate:[AuthenticationGuard], component: GameDetailsComponent},
  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
