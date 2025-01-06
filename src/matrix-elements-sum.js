const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (i = matrix.length - 1; i >= 0; i--) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i - 1 >= 0) {
        if (matrix[i - 1][j] > 0) {
          res += matrix[i][j];
        }
      } else {
        res += matrix[i][j];
      }
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
