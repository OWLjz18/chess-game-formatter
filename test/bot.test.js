import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import messages from '../data/messages.js';
import clientMakeRequest from '../src/utils/test/clientMakeRequest.js';

describe('Test Bot', () => {
  describe('receiving commands', () => {
    it('if it\'s /start, it should respond with the "start" message.', async () => {
      const response = await clientMakeRequest('/start');
      const welcomeMessage = messages.get('start')
        .replace('#{{username}}', response.chat.username);

      assert.equal(response.text, welcomeMessage);
    });

    it('if it\'s /help, it should respond with the "help" message.', async () => {
      const helpMessage = messages.get('help').replace(/(\\|\*\*\*)/g, '');
      const response = await clientMakeRequest('/help');

      assert.equal(response.text, helpMessage);
    });

    it('if it\'s /example, it should respond with the "example" message.', async () => {
      const exampleMessage = messages.get('example').replace(/(```|\\|\*\*)/g, '');
      const response = await clientMakeRequest('/example');

      assert.equal(response.text, exampleMessage);
    });

    it('if it\'s /donate, it should respond with the "donate" message.', async () => {
      const response = await clientMakeRequest('/donate');
      const donateMessage = messages.get('donateWithoutMarkdown');

      assert.equal(response.text, donateMessage);
    });
  });

  describe('receiving texts', () => {
    it('if it\'s "hi" or "hello", reply with the "hello" message.', async () => {
      const helloMessage = messages.get('hello');
      const response = await clientMakeRequest('hi');

      assert.equal(response.text, helloMessage);
    });

    it('if it\'s "bye" or "goodbye", reply with the "bye" message.', async () => {
      const byeMessage = messages.get('bye');
      const response = await clientMakeRequest('bye');

      assert.equal(response.text, byeMessage);
    });

    it('if it\'s "thanks" or "thank you", reply with the "thanks" message.', async () => {
      const thanksMessage = messages.get('thanks');
      const response = await clientMakeRequest('thanks');

      assert.equal(response.text, thanksMessage);
    });
  });
});
