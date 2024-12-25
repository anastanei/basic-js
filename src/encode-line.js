const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;

  str.split('').forEach((char, index, arr) => {
    if (char === arr[index + 1]) {
      count += 1;
    } else {
      res += `${count > 1 ? count : ''}${char}`;
      count = 1;
    }
  });

  return res;
}
module.exports = {
  encodeLine
};
