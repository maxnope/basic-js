const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nMax = 0;
  n = n.toString();

  for (let i = 0; i < n.length; i++) {
    let nTemp = +(n.slice(0, i) + n.slice(i + 1));
    nMax = Math.max(nMax, nTemp);
  }

  return nMax;
}

module.exports = {
  deleteDigit
};
