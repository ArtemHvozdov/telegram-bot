import { Bot } from 'grammy'

const bot = new Bot("6924837455:AAHY-eP-iRghW-0YnUYMO3XCDNcHnQdXu3Q")

bot.command("start", (ctx) => ctx.reply("Welcome! The bot is running..."))

bot.on("message", async (ctx) => {
    const msgText = ctx.message?.text
    const msgEntities = ctx.entities
    const msgAuthor = ctx.from
    const msgId = ctx.inlineMessageId

    setTimeout(() => {
        ctx.reply(`You wtrite is ${msgText}`)
    }, 2000);

    setTimeout(() => {
        ctx.reply(`ID of this message ${msgId}`)
    }, 2000);

    setTimeout(() => {
        ctx.reply(`Author of rhis message is ${msgAuthor}`)
    }, 2000);

    setTimeout(() => {
       console.log(msgEntities)
    }, 2000);
    
})

bot.start()
