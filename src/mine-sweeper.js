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
  var rows = matrix.length;
  var cols = matrix[0].length;
  var result = new Array(rows);

  for (var i = 0; i < rows; i++) {
    result[i] = new Array(cols).fill(0);
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        for (var x = -1; x <= 1; x++) {
          for (var y = -1; y <= 1; y++) {

            if (x === 0 && y === 0) continue;

            var newRow = i + x;
            var newCol = j + y;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              result[newRow][newCol]++
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
