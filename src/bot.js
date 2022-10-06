import 'dotenv/config';
import { Telegraf } from 'telegraf';
import BotHandlers from './models/BotHandlers.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(BotHandlers.start);
bot.help(BotHandlers.help);

bot.command('/example', BotHandlers.example);
bot.command('/donate', BotHandlers.donate);

bot.hears(/\b(hello|hi)\b/i, BotHandlers.replyHello);
bot.hears(/\b(goodbye|bye)\b/i, BotHandlers.replyBye);
bot.hears(/\b(thank you|thanks)\b/i, BotHandlers.replyToAThankYou);

bot.on('text', BotHandlers.onText);

export default bot;
