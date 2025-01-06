const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  for (let i = 0; i <= arr.length - 2; i++) {
    let minValue = arr[i];

    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < minValue && arr[j] != -1) {
        minValue = arr[j];
        let swap = arr[i];
        arr[i] = minValue;
        arr[j] = swap;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
