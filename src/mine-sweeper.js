const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  const emptyMatrix = matrix.map((row) => row.map(() => 0));

  matrix.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === true) {
        directions.forEach(([rowDir, colDir]) => {
          const newRow = rowIndex + rowDir;
          const newCol = colIndex + colDir;

          if (
            newRow >= 0 &&
            newRow < matrix.length &&
            newCol >= 0 &&
            newCol < row.length
          ) {
            emptyMatrix[newRow][newCol] += 1;
          }
        });
      }
    });
  });

  return emptyMatrix;
}

module.exports = {
  minesweeper
};
