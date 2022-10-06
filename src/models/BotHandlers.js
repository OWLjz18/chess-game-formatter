import { EventEmitter } from 'events';
import messages from '../../data/messages.js';
import parser from '../parser.js';
import formatter from '../formatter.js';

/**
 * Class that contains the event handlers for the bot.
*/
const BotHandlers = class {
  /**
   * Allows listening and firing of custom events for handlers.
   * @static
  */
  static event = new EventEmitter();

  /**
   * Get the last response from the bot. But one of the following handlers must have been used.
   * @async
   * @returns {Promise<module:types.BotResponse>}
  */
  static getResponse () {
    return new Promise((resolve) => {
      BotHandlers.event.on('bot-response', ({ response }) => resolve({ ...response, statusCode: 200 }));
    });
  }

  /**
   * Runs when you start the bot or pass the /start command to it. And reply with a welcome message.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static start (context) {
    const { username } = context.chat;
    const welcomeMessage = messages
      .get('start')
      .replace('#{{username}}', username);

    context.reply(welcomeMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * It is executed when the /help command is sent to the bot. And reply with a help message.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static help (context) {
    const helpMessage = messages.get('help');

    context.replyWithMarkdownV2(helpMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * It is executed when the /example command is sent to the bot.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static example (context) {
    const exampleMessage = messages.get('example');

    context.replyWithMarkdownV2(exampleMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * It is executed when the /donate command is sent to the bot.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static donate (context) {
    const donateMessage = messages.get('donate');

    context.replyWithMarkdownV2(donateMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * It is executed when the bot receives the text "hi" or "hello" and respond with a greeting.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static replyHello (context) {
    const helloMessage = messages.get('hello');

    context.reply(helloMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * It is executed when the bot receives the text "bye" or "goodbye" and responds with a goodbye message.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static replyBye (context) {
    const byeMessage = messages.get('bye');

    context.reply(byeMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * it is executed when the bot is thanked, to which it replies that this is its job.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static replyToAThankYou (context) {
    const thanksMessage = messages.get('thanks');

    context.reply(thanksMessage)
      .then((response) => BotHandlers.event.emit('bot-response', { response }));
  }

  /**
   * It is executed when the bot receives any text. And if it is not a command, nor a greeting, nor the expected data, it returns an error message.
   * @param {module:types.BotContext} context - This is the chat context in which the bot runs.
   * @fires BotHandlers#bot-response
  */
  static onText (context) {
    const { text } = context.message;

    if (!text.startsWith('/')) {
      const data = parser(text);
      const textFormatted = formatter(data);

      context.replyWithMarkdownV2(textFormatted)
        .then((response) => BotHandlers.event.emit('bot-response', { response }));
    }
  }
};

export default BotHandlers;
