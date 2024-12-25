const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const keys = new Map([
  [
    '--discard-next',
    (array, index, acc) => {
      array[index + 1] = undefined;
      return acc;
    }
  ],
  [
    '--discard-prev',
    (array, index, acc) => {
      if (array[index - 1] !== undefined) {
        acc[acc.length - 1] && acc.pop();
      }
      return acc;
    }
  ],
  [
    '--double-next',
    (array, index, acc) => {
      if (array[index + 1] !== undefined) {
        acc.push(array[index + 1]);
      }
      return acc;
    }
  ],
  [
    '--double-prev',
    (array, index, acc) => {
      if (array[index - 1] !== undefined) {
        acc.push(array[index - 1]);
      }
      return acc;
    }
  ]
]);

function transform(srcArr) {
  if (!Array.isArray(srcArr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }


  const arr = [...srcArr];
  const res = arr.reduce((acc, item, index, array) => {
    if (keys.has(item)) {
      const func = keys.get(item);
      return func(array, index, acc);
    };
    if (item !== undefined) {
      acc.push(item);
    }
    return acc;
  }, []);

  return res;
}

module.exports = {
  transform
};
``