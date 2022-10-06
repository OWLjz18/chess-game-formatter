/**
 * Get the matches of a regular expression on a text.
 * @module utils/getRegexMatches
 * @param {String} [text=''] - Text from which the matches will be obtained.
 * @param {RegExp} regexp - Regular expression to apply on the text.
 * @param {{ all: Boolean }} [all=false] - Indicates whether to return all the matches obtained, rather than just the first.
 * @returns {(String|String[]|null)}
 *
 * @example
 *
 * const text = 'Hi, something...';
 * const regex = /hi/ig;
 * const result = getRegexMatches(text, regexp, { all: true });
 *
 * console.log(result); // ['Hi', 'hi']
*/
const getRegexpMatches = function (text, regexp, { all = false } = {}) {
  if (!text) {
    return null;
  }

  const matches = text.match(regexp);

  if (!matches) {
    return null;
  }

  if (all) {
    return matches;
  }

  return matches[0];
};

export default getRegexpMatches;
