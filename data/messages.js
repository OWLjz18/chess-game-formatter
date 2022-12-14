import examples from './examples.js';

const messages = new Map();
const blitzData = examples.get('blitzData');
const blitzFormatted = examples.get('blitzFormatted');

messages.set('error', `
Sorry, the data is incomplete πΏ
`.trim());

messages.set('start', `
Welcome #{{username}}, thanks for using this bot! ππ»

To get started you can refer to the /example command which will provide you with an example of the text you expect to receive and show you the final result π

And if you want to donate a grain of sand to pay for the hosting of this bot, you can refer to the /donate command β€οΈ
`.trim());

messages.set('help', `
My function is to receive the data obtained when playing a game on chess\\.com through: ***Options \\> Share PGN \\> Copy to clipboard***\\. And then I format that data to give you more readable text π₯³

You can see an example of this using the /example command π€

If the project is to your liking, you can make a donation using the /donate command\\. And don't worry about a high amount, whether it's $0\\.10 or $0\\.50 is enough, it's called a grain of sand for a reason π
`.trim());

messages.set('example', `
β’ Let's see an example, I expect to receive a text like this:

\`\`\` ${blitzData} \`\`\`

β’ To return the formatted data to you:

\`\`\` ${blitzFormatted} \`\`\`

β Remember that this data is obtained from a game played on chess\\.com through **options \\> share PGN \\> Copy to clipboard**\\.
`.trim());

messages.set('donate', `
Thank you for being interested in donating your grain of sand for the maintenance of this bot\\! πΊ

You can do it using Paypal by clicking [here](https://paypal.me/OWLjz18)\\. And if you do not have Paypal, you can contact my [creator](https://t.me/owljz18) to consult other means that help you make your donation π€

And if you have a Github account you can give my [repository](https://github.com/OWLjz18/chess-game-formatter) a star β­οΈ that also helps a lot βΊοΈ
`.trim());

messages.set('donateWithoutMarkdown', `
Thank you for being interested in donating your grain of sand for the maintenance of this bot! πΊ

You can do it using Paypal by clicking here. And if you do not have Paypal, you can contact my creator to consult other means that help you make your donation π€

And if you have a Github account you can give my repository a star β­οΈ that also helps a lot βΊοΈ
`.trim());

messages.set('hello', `
Hello! It will be a pleasure to help you, send me the game to format π
`.trim());

messages.set('bye', `
Bye! It was a pleasure to help you, come back soon β¨
`.trim());

messages.set('thanks', `
A pleasure, that's my job πΈ
`.trim());

export default messages;
