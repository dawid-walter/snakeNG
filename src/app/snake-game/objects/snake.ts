import {SnakeBlock} from './snake-block';
import {BLOCK_SIZE} from '../settings/global';
import {DIRECTIONS} from './directions';

export class Snake {
  color;
  readonly snakeBody: SnakeBlock[];

  constructor(color: string) {
    this.color = color;
    this.snakeBody = [
      {x: 5 * BLOCK_SIZE, y: BLOCK_SIZE},
      {x: 4 * BLOCK_SIZE, y: BLOCK_SIZE},
      {x: 3 * BLOCK_SIZE, y: BLOCK_SIZE},
      {x: 2 * BLOCK_SIZE, y: BLOCK_SIZE}
    ];
  }

  getSnake(): SnakeBlock[] {
    return this.snakeBody;
  }

  private getSnakeHead(): SnakeBlock {
    return this.snakeBody[0];
  }

  addBlockToSnake(): void {
    this.snakeBody.push({
      x: this.snakeBody[this.snakeBody.length - 1].x,
      y: this.snakeBody[this.snakeBody.length - 1].y
    });
  }

  moveSnakeTo(direction: DIRECTIONS): void {
    this.snakeBody.pop();
    if (direction === DIRECTIONS.UP) {
      this.snakeBody.unshift({x: this.getSnakeHead().x, y: this.getSnakeHead().y - BLOCK_SIZE});
    }
    if (direction === DIRECTIONS.DOWN) {
      this.snakeBody.unshift({x: this.getSnakeHead().x, y: this.getSnakeHead().y + BLOCK_SIZE});
    }
    if (direction === DIRECTIONS.RIGHT) {
      this.snakeBody.unshift({x: this.getSnakeHead().x + BLOCK_SIZE, y: this.getSnakeHead().y});
    }
    if (direction === DIRECTIONS.LEFT) {
      this.snakeBody.unshift({x: this.getSnakeHead().x - BLOCK_SIZE, y: this.getSnakeHead().y});
    }
  }

  isHittingWall(width: number, height: number): boolean {
    return this.getSnakeHead().x <= 0 || this.getSnakeHead().x >= width ||
      this.getSnakeHead().y <= 0 || this.getSnakeHead().y >= height;
  }
}
