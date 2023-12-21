import { Bot } from 'grammy'
import dotenv from 'dotenv'

dotenv.config()

const bot = new Bot(`${process.env.BOT_TOKEN}`)


const userNames = new Map<number, string>();

bot.command('start', (ctx) => ctx.reply('Hello! What is your name?'));

bot.on('message', async (ctx) => {
    const chatId = ctx.chat.id;
    const msgText = ctx.message?.text || '';

    if (!userNames.has(chatId)) {
        userNames.set(chatId, msgText);
        await ctx.reply(`Welcome, ${msgText}!`);
        setTimeout(() => {
            ctx.reply('How old are you?');
        }, 1000);
    }
});

bot.start()
