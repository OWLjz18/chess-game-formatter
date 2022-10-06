/**
 * @module types
*/

/**
 * @typedef module:types.ParserData
 * @property {(String|null)} date - The day the game was played.
 * @property {(String|null)} event - The title of the event.
 * @property {(String|null)} players - The players who were part of the game.
 * @property {(String|null)} whiteElo - The Elo of the player who played with the white pieces.
 * @property {(String|null)} blackElo - The Elo of the player who played with the black pieces.
 * @property {(String|null)} result - The result of the game.
 * @property {(String|null)} termination - End of game message.
 * @property {(String[]|null)} movements - All the moves of the game.
 * @property {(String|null)} timeControl - The type of game. (Standard, Blitz, Bullet, etc.)
*/

/**
 * @typedef module:types.Update
 * @see https://telegraf.js.org/types/Types.UpdateType.html
*/

/**
 * @typedef {module:types.Update} module:types.BotResponse
 * @property {Number} statusCode - If the request was successful, it returns a 200 status code, otherwise it returns a 400 status code.
*/

/**
 * @typedef module:types.BotContext
 * @see https://telegraf.js.org/classes/Context.html
*/

/**
 * @event BotHandlers#bot-response
 * @property {module:types.Update} response - It is the bot's response to the request made.
*/
