import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import examples from '../data/examples.js';
import messages from '../data/messages.js';
import formatter from '../src/formatter.js';
import parser from '../src/parser.js';

describe('Test formatter', () => {
  it('If it receives an object with any null properties, it returns the "error" message.', () => {
    const data = parser('AngelBeats');

    const result = formatter(data);
    const errorMessage = messages.get('error');

    assert.equal(result, errorMessage);
  });

  it.skip('If it receives an object without null values, it returns the formatted data.', () => {
    const text = examples.get('dataComplete1');
    const data = parser(text);

    const result = formatter(data);
    const textFormatted = examples.get('dataFormatted');

    assert.equal(result, textFormatted);
  });
});
