import { Component } from '@angular/core';
import { Game } from '../game';
import { GamesApiService } from '../games-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(private _GamesApiService: GamesApiService, private _ActivatedRoute: ActivatedRoute) {
    _ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        if (params.get("param") == "all") {
          _GamesApiService.getGames().subscribe({
            next: (response) => this.games = response
          })
        } else {
          let param:any = `?${params.get("param")}=`;
          let value:any = params.get("value")
          _GamesApiService.getGames(param ,value).subscribe({
          next: (response) => this.games = response
        })
        }
      }
    })
  }

  games:Game[] = [];
}
