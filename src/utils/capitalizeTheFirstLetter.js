/**
 * Capitalizes the first letter of a text.
 * @param {String} text - Text to format.
 * @returns {String} New formatted text.
 *
 * @module utils/capitalizeTheFirstLetter
 *
 * @example
 * • Input: 'hello!'
 * • Output: 'Hello!'
*/
const capitalizeTheFirstLetter = function (text) {
  if (!text) {
    return null;
  }

  const firstLetter = text[0];
  const restOfTheText = text.slice(1);

  return firstLetter.toUpperCase() + restOfTheText;
};

export default capitalizeTheFirstLetter;
