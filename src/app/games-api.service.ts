import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private _HttpClient: HttpClient) {}

  options:Object = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3643e4a93msh68edf5980566b32p17e064jsn68d6b386c52c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  getGames(param:String = "", value:String = ""):Observable<any> {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games${param}${value}`, this.options);
  }

  getGameDetails(id:any) {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.options);
  }
}
