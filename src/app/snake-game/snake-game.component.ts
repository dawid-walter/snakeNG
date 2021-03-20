import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Snake} from './objects/snake';
import {APPLE_COLOR, BLOCK_SIZE, COLS, GRID_SIZE, ROWS, SNAKE_COLOR} from './settings/global';
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
  speed = 1;
  private time = {start: 0, elapsed: 0, total: 2000};
  private snake: Snake;
  private movingDirection: DIRECTIONS;
  private currentFrameId: number;
  isRunning = false;
  private apple;


  constructor() {
  }

  ngOnInit(): void {
    this.ctx = this.canvasSnake.nativeElement.getContext('2d');
    this.ctx.canvas.width = COLS * BLOCK_SIZE + (COLS * GRID_SIZE + 1);
    this.ctx.canvas.height = ROWS * BLOCK_SIZE + (COLS * GRID_SIZE + 1);
    this.snake = new Snake(SNAKE_COLOR);
    this.drawSnake();
    this.resetStats();
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
    this.isRunning = true;
    this.resetGame();
    this.time.start = performance.now();
    this.randomApple();
    requestAnimationFrame((now) => this.animate(now));
  }

  resumeGame(): void {
    this.isRunning = !this.isRunning;
    this.time.start = performance.now();
    requestAnimationFrame((now) => this.animate(now));
  }

  pauseGame(): void {
    this.isRunning = !this.isRunning;
    cancelAnimationFrame(this.currentFrameId);
  }

  resetGame(): void {
    this.isRunning = false;
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.snake = new Snake(SNAKE_COLOR);
    this.movingDirection = DIRECTIONS.RIGHT;
    cancelAnimationFrame(this.currentFrameId);
    this.resetStats();
    this.drawSnake();
  }

  private gameOver(): void {
    cancelAnimationFrame(this.currentFrameId);
    this.ctx.fillStyle = 'black';
    this.ctx.font = '46px \'Press Start 2P\'';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Over!', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    this.ctx.font = '36px \'Press Start 2P\'';
    this.ctx.fillText('Your score: ' + this.points, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 + 100);
  }

  private animate(now): void {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > 250) {
      this.drawFrame();
      this.time.start = now;
    }
    this.currentFrameId = requestAnimationFrame((timestamp) => this.animate(timestamp));
    if (this.snake.isEatingItself() || this.snake.isHittingWall(this.ctx.canvas.width, this.ctx.canvas.height)) {
      this.gameOver();
    }
    if (this.snake.isEatingApple(this.apple)) {
      this.snake.addBlockToSnake();
      this.randomApple();
    }
  }

  private drawFrame(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.updateStats();
    this.drawSnake();
    this.drawApple();
    this.snake.moveSnakeTo(this.movingDirection);
  }

  private drawSnake(): void {
    this.ctx.fillStyle = this.snake.color;
    this.snake.getSnake().forEach(snakeBlock => {
      this.ctx.fillRect(snakeBlock.x, snakeBlock.y, BLOCK_SIZE, BLOCK_SIZE);
    });
  }

  private updateStats(): void {
    this.points++;
    this.snakeBlocks = this.snake.snakeBody.length;
  }

  private resetStats(): void {
    this.points = 0;
    this.snakeBlocks = this.snake.getSnake().length;
  }

  private drawApple(): void {
    this.ctx.fillStyle = APPLE_COLOR;
    this.ctx.fillRect(this.apple.x, this.apple.y, BLOCK_SIZE, BLOCK_SIZE);
  }

  private randomApple(): void {
    const random1 = Math.floor(Math.random() * COLS - 1) + 1;
    const random2 = Math.floor(Math.random() * ROWS - 1) + 1;
    this.apple = {x: random1 * BLOCK_SIZE + random1 + GRID_SIZE, y: random2 * BLOCK_SIZE + random2 + GRID_SIZE};
  }
}
