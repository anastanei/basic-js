const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 *
 *
 *
 * 11, 0, 1 - winter
 * 2, 3, 4, - spring
 * 5, 6, 7 - summer
 * 8, 9, 10 - autumn
 */

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    !(date instanceof Date);
  } catch (e) {
    throw new Error('Invalid date!');
  }
  try {
    isNaN(date.getTime());
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const seasons = new Map([
    [[11, 0, 1], 'winter'],
    [[2, 3, 4], 'spring'],
    [[5, 6, 7], 'summer'],
    [[8, 9, 10], 'autumn']
  ]);

  const month = date.getMonth();

  for (const [key, value] of seasons.entries()) {
    if (key.includes(month)) return value;
  }
}

module.exports = {
  getSeason
};
