import AsciiTable from 'ascii-table';
import messages from '../data/messages.js';

const template = `\`\`\`
#{{ title }}
#{{ dashes }}

#{{ table }}

Type: #{{ type }}.
Date: #{{ date }}.

Result: #{{ result }}.
#{{ termination }}.
\`\`\``;

/**
 * Formats the data obtained by the ["parser"]{@link module:parser} function.
 * @param {module:types.ParserData} - These are the data that must be received by the ["parser"]{@link module:parser} function.
 * @returns {String} It is the text with the formatted data or in case some data is missing, it will be an error message.
 *
 * @module formatter
*/
const formatter = function ({
  event, movements, players, whiteElo, blackElo, result, date, timeControl, termination,
}) {
  if (
    !event
    && !movements
    && !players
    && !whiteElo
    && !blackElo
    && !result
    && !date
    && !timeControl
    && !termination
  ) {
    return messages.get('error').trim();
  }

  const table = new AsciiTable();
  table.setBorder('⡇', ' ', ' ', ' ');

  movements.forEach((movement) => {
    const row = movement.split(' ');
    table.addRow(row);
  });

  const title = `⬜ ${players[0]} (${whiteElo}) vs ${players[1]} (${blackElo}) ⬛`;
  const dashes = '-'.repeat(title.length + 2);
  const tableText = table.render().replace(/\./g, '').trim();

  const text = template
    .replace('#{{ title }}', title)
    .replace('#{{ dashes }}', dashes)
    .replace('#{{ table }}', tableText)
    .replace('#{{ type }}', timeControl)
    .replace('#{{ date }}', date)
    .replace('#{{ result }}', result)
    .replace('#{{ termination }}', termination);

  return text;
};

export default formatter;
