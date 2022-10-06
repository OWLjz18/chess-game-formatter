import 'dotenv/config';
import bot from '../../bot.js';
import BotHandler from '../../models/BotHandlers.js';

const { CHAT_ID } = process.env;

/**
 * It makes a request to the bot, gets its response and deletes the recently sent message.
 * @async
 * @param {String} [request=''] - The request to perform, for example "/start", "/donate", "hi", etc.
 * @returns {Promise<module:Types.BotResponse>}
 *
 * @module utils/test/clientMakeRequest
*/
const clientMakeRequest = async function (request = '') {
  const message = {
    text: request,
    chat: {
      id: CHAT_ID,
      type: 'private',
      username: 'owljz18',
    },
  };

  if (request.startsWith('/')) {
    message.entities = [{
      offset: 0,
      length: request.length,
      type: 'bot_command',
    }];
  }

  bot.handleUpdate({ message });
  const response = await BotHandler.getResponse();
  const { message_id: messageID } = response;

  if (request === '') {
    response.statusCode = 400;
  }

  if (messageID) {
    await bot.telegram.deleteMessage(CHAT_ID, messageID);
  }

  return response;
};

export default clientMakeRequest;
