const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split("-");
  const valid = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];
  let res = true;
  const isValid = function(i) {
    return valid.includes(i);
  }
  if (arr.length == 6) {
   arr.forEach(element => {
    if (element.length == 2) {
      if (!isValid(element[0]) || !isValid(element[1])) {
        res = false;
      }
    } else {
      res = false;
    }
   });
  } else {
    res = false;
  }
  return res;
}

module.exports = {
  isMAC48Address
};
