const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Send a message when the bot starts
bot.start((ctx) => ctx.reply("Welcome to my bot."));
bot.help((ctx) =>
  ctx.reply("For any help or assistance, reach out to us <your-email.com>")
);

// Normal response
bot.on(message("text"), (ctx) => {
  try {
    ctx.reply("Your message received 👍");
  } catch (err) {
    ctx.reply("Oops! Something went wrong.");
  }
});

// HTML response
// bot.on(message("text"), (ctx) => {
//   try {
//     ctx.replyWithHTML(`This is a special <b>HTML</b> message 🚀`);
//   } catch (err) {
//     ctx.reply("Oops! Something went wrong.");
//   }
// });

// Launch the bot
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
