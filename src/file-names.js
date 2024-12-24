const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const formattedNames = new Map();
  const res = [];

  for (const name of names) {
    if (formattedNames.has(name)) {
      let k = formattedNames.get(name);
      let newName = `${name}(${k})`;

      while (formattedNames.has(newName)) {
        k += 1;
        newName = `${name}(${k})`;
      }

      res.push(newName);
      formattedNames.set(newName, 1);
      formattedNames.set(name, k + 1);
    } else {
      res.push(name);
      formattedNames.set(name, 1);
    }
  }

  return res;
}

module.exports = {
  renameFiles
};
