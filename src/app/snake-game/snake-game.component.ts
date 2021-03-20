import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Snake} from './objects/snake';
import {BLOCK_SIZE, COLS, ROWS, SNAKE_COLOR} from './settings/global';
import {DIRECTIONS} from './objects/directions';
import {KEY_CODE} from './objects/key-code';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
  @ViewChild('snake', {static: true})
  private canvasSnake: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  points: number;
  snakeBlocks: number;
  speed: number;
  private time = {start: 0, elapsed: 0, total: 2000};
  private snake: Snake;
  private movingDirection: DIRECTIONS;
  private currentFrameId: number;


  constructor() {
  }

  ngOnInit(): void {
    this.ctx = this.canvasSnake.nativeElement.getContext('2d');
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.snake = new Snake(SNAKE_COLOR);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.code === KEY_CODE.KEY_DOWN) {
      this.movingDirection = DIRECTIONS.DOWN;
    }
    if (event.code === KEY_CODE.KEY_UP) {
      this.movingDirection = DIRECTIONS.UP;
    }
    if (event.code === KEY_CODE.KEY_LEFT) {
      this.movingDirection = DIRECTIONS.LEFT;
    }
    if (event.code === KEY_CODE.KEY_RIGHT) {
      this.movingDirection = DIRECTIONS.RIGHT;
    }
  }

  playGame(): void {
    this.time.start = performance.now();
    requestAnimationFrame((now) => this.animate(now));
  }

  pauseGame(): void {

  }

  resetGame(): void {

  }

  private gameOver(): void {
    cancelAnimationFrame(this.currentFrameId);
    this.ctx.fillStyle = 'black';
    this.ctx.font = '46px \'Press Start 2P\'';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Over!', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    this.ctx.font = '36px \'Press Start 2P\'';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Your score: ' + this.points, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 + 100);
  }

  private animate(now): void {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > 500) {
      this.drawFrame();
      this.time.start = now;
    }
    this.currentFrameId = requestAnimationFrame((timestamp) => this.animate(timestamp));
    if (this.snake.isHittingWall(this.ctx.canvas.width, this.ctx.canvas.height)) {
      this.gameOver();
    }
  }

  drawFrame(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.updateStats();
    this.drawSnake();
    this.snake.moveSnakeTo(this.movingDirection);
  }

  drawSnake(): void {
    this.ctx.fillStyle = this.snake.color;
    this.snake.getSnake().forEach(snakeBlock => {
      this.ctx.fillRect(snakeBlock.x, snakeBlock.y, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
    });
  }

  private updateStats(): void {
    this.points++;
    this.snakeBlocks = this.snake.snakeBody.length;
  }
}
