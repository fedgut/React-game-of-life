// This class represents each cell of the board. It manages its current status and its next status
export default class Cell {
  constructor(alive = false) {
    this.alive = alive;
    this.nextGen = null;
    this.livingNeighbours = NaN;
  }

  // Here the next generation of this cell is calculated
  calculateNextGen() {
    if (Number.isNaN(this.livingNeighbours)) {
      throw new Error('Living neibhours have not been set');
    } else if (this.livingNeighbours < 2 || this.livingNeighbours > 3) {
      this.nextGen = false;
    } else if (this.livingNeighbours === 3) {
      this.nextGen = true;
    } else {
      this.nextGen = this.alive;
    }
  }

  // We set the next gen only when the game has calculated the next gen for the entire board
  setNextGen() {
    if (this.nextGen == null) {
      throw new Error('Next gen has not been calculated');
    } else {
      this.alive = this.nextGen;
      // Reset to defaults to throw errors when cycle not followed
      this.setLivingNeihbours();
      this.nextGen = null;
    }
  }

  setLivingNeihbours(number = NaN) {
    this.livingNeighbours = number;
  }
}
