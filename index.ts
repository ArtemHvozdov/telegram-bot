import { Bot } from 'grammy'
import dotenv from 'dotenv'

dotenv.config()

const bot = new Bot(`${process.env.BOT_TOKEN}`)

bot.command("start", (ctx) => ctx.reply("Welcome! The bot is running..."))

bot.on("message", async (ctx) => {
    const msgText = ctx.message?.text
     
    ctx.reply(`You wtrite is ${msgText}`)
})

bot.start()
