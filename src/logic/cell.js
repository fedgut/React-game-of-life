// This class represents each cell of the board. It manages its current status and its next status
export default class Cell {
  constructor(alive = false) {
    this.alive = alive;
    this.nextGen = null;
    this.livingNeighbours = null;
  }

  // Here the next generation of this cell is calculated
  calculateNextGen() {
    if (this.livingNeighbours < 2 || this.livingNeighbours > 3) {
      this.nextGen = false;
    } else if (this.livingNeighbours === 3) {
      this.nextGen = true;
    } else {
      this.nextGen = this.alive;
    }
  }

  // We set the next gen only when the game has calculated the next gen for the entire board
  setNextGen() {
    this.alive = this.nextGen;
    this.setLivingNeihbours();
  }

  setLivingNeihbours(number = 0) {
    this.livingNeighbours = number;
  }
}
