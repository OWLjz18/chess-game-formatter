import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import examples from '../data/examples.js';
import parser from '../src/parser.js';

describe('Test parser', () => {
  describe('If all data is passed', () => {
    it('the object must not contain any value equal to "null"', () => {
      const text = examples.get('dataComplete1');
      const data = parser(text);

      const values = Object.values(data);

      assert.ok(!values.includes(null));
    });

    it('the object must not contain any value equal to "null"', () => {
      const text = examples.get('dataComplete2');
      const data = parser(text);

      const values = Object.values(data);

      assert.ok(!values.includes(null));
    });
  });

  describe('If any data is missing', () => {
    it('the field "Event" is missing, property "event" must be equal to "null"', () => {
      const text = examples.get('dataWithoutEvent');

      const data = parser(text);

      assert.equal(data.event, null);
    });

    it('the field "Date" is missing, property "date" must be equal to "null"', () => {
      const text = examples.get('dataWithoutDate');

      const data = parser(text);

      assert.equal(data.date, null);
    });
  });

  describe('If all data is missing', () => {
    it('all object values will be equal to "null"', () => {
      const data = parser('King');

      const values = Object.values(data);

      assert.ok(values.every((value) => value === null));
    });

    it('all object values will be equal to "null"', () => {
      const data = parser('Minecraft Allay');

      const values = Object.values(data);

      assert.ok(values.every((value) => value === null));
    });
  });
});
