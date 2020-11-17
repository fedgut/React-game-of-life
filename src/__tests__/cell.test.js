import Cell from '../logic/cell';

describe('Cell', () => {
  it('Correctly creates an instance of the Cell class', () => {
    const cell = new Cell(true);
    expect(cell.alive).toBe(true);
    expect(cell.nextGen).toBe(null);
    expect(cell.livingNeighbours).toBe(NaN);
  });
  it('Sets living neighbours', () => {
    const cell = new Cell(true);
    cell.setLivingNeihbours(3);
    expect(cell.livingNeighbours).toBe(3);
  });
  it('Calculates and sets next gen when cell revives', () => {
    const cell = new Cell();
    expect(cell.alive).toBe(false);
    cell.setLivingNeihbours(3);
    cell.calculateNextGen();
    // Living Status should not change until next gen is set
    expect(cell.alive).toBe(false);
    cell.setNextGen();
    expect(cell.alive).toBe(true);
  });
  it('Calculates and sets next gen when cell dies', () => {
    const cell = new Cell(true);
    cell.setLivingNeihbours(1);
    cell.calculateNextGen();
    expect(cell.alive).toBe(true);
    cell.setNextGen();
    expect(cell.alive).toBe(false);
  });
  it('Throws exceptions on when neighbours have not calculated', () => {
    const cell = new Cell(true);
    expect(() => {
      cell.calculateNextGen();
    }).toThrow(new Error('Living neibhours have not been set'));
  });
  it('Throws exceptions on when next gen has not been set', () => {
    const cell = new Cell(true);
    expect(() => {
      cell.setNextGen();
    }).toThrow(new Error('Next gen has not been calculated'));
  });
});
