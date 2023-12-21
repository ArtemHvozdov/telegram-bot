"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = new grammy_1.Bot(`${process.env.BOT_TOKEN}`);
const userNames = new Map();
bot.command('start', (ctx) => ctx.reply('Hello! What is your name?'));
bot.on('message', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const chatId = ctx.chat.id;
    const msgText = ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) || '';
    if (!userNames.has(chatId)) {
        // Если у пользователя еще нет сохраненного имени, сохраняем его
        userNames.set(chatId, msgText);
        yield ctx.reply(`Welcome, ${msgText}!`);
        setTimeout(() => {
            ctx.reply('How old are you?');
        }, 1000);
    }
    else {
        // Иначе, бот уже знает имя пользователя и задает вопрос о возрасте
        // Можно добавить здесь обработку возраста
    }
}));
// bot.command("start", (ctx) => ctx.reply("Hello! What is your name?"))
// bot.on("message", async (ctx) => {
//     const msgText = ctx.message?.text
//     ctx.reply(`Welcome, ${msgText}`)
//     setTimeout(() => {
//         ctx.reply('How old are you?')
//     }, 500)
// })
bot.start();
