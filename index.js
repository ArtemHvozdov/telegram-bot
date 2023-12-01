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
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("6924837455:AAHY-eP-iRghW-0YnUYMO3XCDNcHnQdXu3Q");
bot.command("start", (ctx) => ctx.reply("Welcome! The bot is running..."));
bot.on("message", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const msgText = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text;
    const msgEntities = ctx.entities;
    const msgAuthor = ctx.from;
    const msgId = ctx.inlineMessageId;
    setTimeout(() => {
        ctx.reply(`You wtrite is ${msgText}`);
    }, 2000);
    setTimeout(() => {
        ctx.reply(`ID of this message ${msgId}`);
    }, 2000);
    setTimeout(() => {
        ctx.reply(`Author of rhis message is ${msgAuthor}`);
    }, 2000);
    setTimeout(() => {
        console.log(msgEntities);
    }, 2000);
}));
// bot.hears("message", async (ctx) => {
//     const msgText = ctx.message?.text
//     ctx.reply(`You wtrite is ${msgText}`)
// })
bot.start();
