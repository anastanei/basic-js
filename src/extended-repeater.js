const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

const repeatString = ({ str, repeatTimes, separator }) =>
  Array.from({ length: +repeatTimes || 1 }, () => str).join(separator);

function repeater(str, options) {
  const addition =
    options?.addition !== undefined
      ? repeatString({
          str: String(options.addition),
          repeatTimes: options?.additionRepeatTimes,
          separator: options?.additionSeparator ?? '|'
        })
      : '';

  return repeatString({
    str: `${str}${addition}`,
    repeatTimes: options?.repeatTimes,
    separator: options?.separator ?? '+'
  });
}

module.exports = {
  repeater
};
