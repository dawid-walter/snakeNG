import {SnakeBlock} from './snake-block';
import {BLOCK_SIZE, GRID_SIZE} from '../settings/global';
import {DIRECTIONS} from './directions';

export class Snake {
  color;
  readonly snakeBody: SnakeBlock[];

  constructor(color: string) {
    this.color = color;
    this.snakeBody = [
      {x: 4 * BLOCK_SIZE + 5 * GRID_SIZE, y: BLOCK_SIZE + (2 * GRID_SIZE)},
      {x: 3 * BLOCK_SIZE + 4 * GRID_SIZE, y: BLOCK_SIZE + (2 * GRID_SIZE)},
      {x: 2 * BLOCK_SIZE + 3 * GRID_SIZE, y: BLOCK_SIZE + (2 * GRID_SIZE)},
      {x: 1 * BLOCK_SIZE + 2 * GRID_SIZE, y: BLOCK_SIZE + (2 * GRID_SIZE)}
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
    if (direction === DIRECTIONS.RIGHT) {
      this.snakeBody.unshift({x: this.getSnakeHead().x + BLOCK_SIZE + GRID_SIZE, y: this.getSnakeHead().y});
    }
    if (direction === DIRECTIONS.DOWN) {
      this.snakeBody.unshift({x: this.getSnakeHead().x, y: this.getSnakeHead().y + BLOCK_SIZE + GRID_SIZE});
    }
    if (direction === DIRECTIONS.LEFT) {
      this.snakeBody.unshift({x: this.getSnakeHead().x - BLOCK_SIZE - GRID_SIZE, y: this.getSnakeHead().y});
    }
    if (direction === DIRECTIONS.UP) {
      this.snakeBody.unshift({x: this.getSnakeHead().x, y: this.getSnakeHead().y - BLOCK_SIZE - GRID_SIZE});
    }
  }

  isHittingWall(width: number, height: number): boolean {
    return this.getSnakeHead().x <= - BLOCK_SIZE || this.getSnakeHead().x >= width + BLOCK_SIZE ||
      this.getSnakeHead().y <= - BLOCK_SIZE || this.getSnakeHead().y >= height + BLOCK_SIZE;
  }

  isEatingItself(): boolean {
    const tempArray = [...this.snakeBody];
    const tempSnakeBlock = tempArray.shift();
    return tempArray.filter(e => e.x === tempSnakeBlock.x && e.y === tempSnakeBlock.y).length > 0;
  }

  isEatingApple(apple: SnakeBlock): boolean {
    return (this.getSnakeHead().x === apple.x && this.getSnakeHead().y === apple.y);
  }
}
