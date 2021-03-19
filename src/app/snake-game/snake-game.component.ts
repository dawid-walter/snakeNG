import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
points: number;
  snakeBlocks: number;
  speed: number;

  constructor() { }

  ngOnInit(): void {
  }

  playGame() {

  }

  pauseGame() {

  }

  resetGame() {

  }
}
