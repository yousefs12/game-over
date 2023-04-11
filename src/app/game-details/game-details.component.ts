import { Component } from '@angular/core';
import { GamesApiService } from '../games-api.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {

  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesApiService: GamesApiService) {
    _ActivatedRoute.paramMap.subscribe({
      next: (response) => {
        _GamesApiService.getGameDetails(response.get("id")).subscribe({
          next: (response) => this.gameDetails = response
        });
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  gameDetails:any = {};
}
