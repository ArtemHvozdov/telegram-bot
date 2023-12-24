import { Bot } from 'grammy'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const bot = new Bot(`${process.env.BOT_TOKEN}`)


const userNames = new Map<number, string>();

bot.command('start', async (ctx) => {
    await ctx.reply('Hello! What is your name?');
})

bot.on('message', async (ctx) => {
    const chatId = ctx.chat.id;
    const msgText = ctx.message?.text || '';

    if (!userNames.has(chatId)) {
        userNames.set(chatId, msgText);
        await ctx.reply(`Welcome, ${msgText}!`);

        const data = await axios.get('http://localhost:8080/api/sign-in')
        .catch((error) => {
            console.error('Error when receiving deep link:', error);
            ctx.reply('An error has occurred. Try later.');
            return;
        });

        if (data) {
            ctx.reply(data.data.deepLink);
        }
    }
});

bot.start()
