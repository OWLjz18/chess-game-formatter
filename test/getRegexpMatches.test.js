import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getRegexpMatches from '../src/utils/getRegexpMatches.js';

describe('Test getRegexpMatches', () => {
  describe('If it receives a valid text and a regular expression', () => {
    it('if the "all" option is not passed, it returns the first match.', () => {
      const text = '<h1>Hello!</h1>';
      const regex = /(?<=<h1>)\w+!(?=<\/h1>)/;

      const result = getRegexpMatches(text, regex);

      assert.equal(result, 'Hello!');
    });

    it('if the "all" option is passed, returns all matches.', () => {
      const text = 'Hi, do you play anything?';
      const regex = /hi/ig;

      const result = getRegexpMatches(text, regex, { all: true });
      const expected = ['Hi', 'hi'];

      assert.equal(result.join(''), expected.join(''));
    });
  });

  it('If it doesn\'t receive a text, it returns "null".', () => {
    const result = getRegexpMatches();

    assert.equal(result, null);
  });
});
