const { Bot } = require("grammy");

const BOT_TOKEN = '1671070976:AAHB9lTVx0MNapit55dS-7zERgbJ7qQ7_cE' || "test";

const bot = new Bot(BOT_TOKEN);

let counter = 0;

bot.on(":text", async (ctx) => {
  switch (ctx.message.text) {
    case "reset":
      counter = 0;
      break;
    case "+":
      counter++;
      break;
    case "-":
      counter--;
      break;
    default:
      break;
  }
  ctx.reply(counter);
});

module.exports = { bot };
