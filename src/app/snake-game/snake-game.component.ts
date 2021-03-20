import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Snake} from './objects/snake';
import {BLOCK_SIZE, COLS, ROWS, SNAKE_COLOR} from './settings/global';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
  @ViewChild('snake', {static: true})
  canvasSnake: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  points: number;
  snakeBlocks: number;
  speed: number;
  time = {start: 0, elapsed: 0, total: 2000};
  snake: Snake;


  constructor() {
  }

  ngOnInit(): void {
    this.ctx = this.canvasSnake.nativeElement.getContext('2d');
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.snake = new Snake(SNAKE_COLOR);
  }

  playGame(): void {
    this.time.start = performance.now();
    requestAnimationFrame((now) => this.animate(now));
  }

  pauseGame(): void {

  }

  resetGame(): void {

  }

  private animate(now): void {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > 500) {
      this.draw();
      this.time.start = now;
    }
  }

  draw(): void {

  }
}
