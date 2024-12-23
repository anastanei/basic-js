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
  const array = String(n).split('');
  const res = array.map(
    (_, index, array) =>
      +[...array.slice(0, index), ...array.slice(index + 1, array.length)].join(
        ''
      )
  );

  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
