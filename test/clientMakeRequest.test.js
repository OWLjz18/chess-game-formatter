import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import clientMakeRequest from '../src/utils/test/clientMakeRequest.js';

describe('Test clientMakeRequest', () => {
  it('If the request is successful, it returns a 200 status code.', async () => {
    const response = await clientMakeRequest('hi');

    assert.equal(response.statusCode, 200);
  });

  it('If the request does not match any command or one of the possible texts, it responds with a 400 status code.', async () => {
    const response = await clientMakeRequest();

    assert.equal(response.statusCode, 400);
  });
});
