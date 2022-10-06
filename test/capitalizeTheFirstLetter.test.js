import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import capitalizeTheFirstLetter from '../src/utils/capitalizeTheFirstLetter.js';

describe('Test capitalizeTheFirstLetter', () => {
  it('if it receives a text, it capitalizes its first letter.', () => {
    const text = 'queen';
    const result = capitalizeTheFirstLetter(text);

    assert.equal(result, 'Queen');
  });

  it('if no text is passed, it returns "null".', () => {
    const result = capitalizeTheFirstLetter();

    assert.equal(result, null);
  });
});
