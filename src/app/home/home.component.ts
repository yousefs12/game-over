import { Component } from '@angular/core';
import { GamesApiService } from '../games-api.service';
import { Game } from '../game';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _GamesApiService: GamesApiService) {
    _GamesApiService.getGames("?sort-by=", "popularity").subscribe({
      next: (response) => this.games = response.slice(0, 3)
    })
  }

  games:Game[] = []
}
