import getRegexpMatches from './utils/getRegexpMatches.js';
import capitalizeTheFirstLetter from './utils/capitalizeTheFirstLetter.js';

/**
 * It receives the data of a chess game and stores it in an object.
 * @param {String} template - The data of a game of chess.
 * @return {module:types.ParserData} It is the data contained in an object.
 *
 * @module parser
*/
const parser = function (template) {
  const regexps = {
    date: /(?<=\[Date\s").+(?="])/,
    event: /(?<=\[Event\s").+(?="])/,
    whiteElo: /(?<=\[WhiteElo\s").+(?="])/,
    blackElo: /(?<=\[BlackElo\s").+(?="])/,
    result: /(?<=\[Result\s").+(?="])/,
    termination: /(?<=\[Termination\s").+(?="])/,
    timeControl: /(?<=\[TimeControl\s").+(?="])/,
    movements: /\d+\.(\s+((\w+\d(\+{1,2}|#|=\w)?)|(O-O(-O)?)|(1\/2-1\/2))){1,2}/g,
  };

  const date = getRegexpMatches(template, regexps.date);
  const event = getRegexpMatches(template, regexps.event);
  const players = (event) ? event.split(' vs. ') : null;
  const whiteElo = getRegexpMatches(template, regexps.whiteElo);
  const blackElo = getRegexpMatches(template, regexps.blackElo);
  const result = getRegexpMatches(template, regexps.result);
  const termination = getRegexpMatches(template, regexps.termination);
  const timeControl = getRegexpMatches(template, regexps.timeControl);
  const movements = getRegexpMatches(template, regexps.movements, { all: true });
  const timeControlFormatted = (timeControl) ? capitalizeTheFirstLetter(timeControl) : null;
  const movementsFormatted = (movements) ? movements.map((movement) => movement.replace(/\s/g, ' ').split(/\s+/g).join(' ')) : null;

  const information = {
    date,
    event,
    players,
    whiteElo,
    blackElo,
    result,
    termination,
    movements: movementsFormatted,
    timeControl: timeControlFormatted,
  };

  return information;
};

export default parser;
