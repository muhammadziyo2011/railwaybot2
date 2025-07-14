const TelegramBot = require('node-telegram-bot-api');
const token = '7292394758:AAGSbXGUAbg2JTBt4fuGnYRcIUULNu2m6a0';

const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([
  { command: '/start', description: "Bot haqida ma'lumot" },
  { command: '/info', description: "O'zingiz haqingizda ma'lumot" },
  { command: '/portfolio', description: "Muhammadziyo portfoliosi" },
  { command: '/inline_portfolio', description: "Muhammadziyo portfoliosi" },
  { command: '/username', description: "Usernameingiz" },
  { command: '/botavatar', description: "Bot avatarini ko'rish" },
  { command: '/sticker', description: "Sticker yuborish" },
  { command: '/dinogame', description: "Dino game havolasi" },
]);

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    return bot.sendMessage(chatId, `Assalomu alaykum hurmatli ${msg.from?.first_name}!`, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Info", callback_data: '/info' },
            { text: "Username", callback_data: '/username' },
          ],
          [
            { text: "Botavatar", callback_data: '/botavatar' },
            { text: "Sticker", callback_data: '/sticker' },
          ],
          [
            { text: "Portfolio", callback_data: '/portfolio' },
            { text: "Inline Portfolio", callback_data: '/inline_portfolio' },
          ],
          [
            { text: "Dino game🦖", callback_data: '/dinogame' },
          ]
        ]
      }
    });
  }

  if (text === '/info') {
    return bot.sendMessage(chatId, `Ismingiz: ${msg.from?.first_name}, Familya: ${msg.from?.last_name || "yo'q"}, Chat ID: ${chatId}`);
  }

  if (text === '/username') {
    return bot.sendMessage(chatId, `Sizning username: @${msg.from?.username || "yo'q"}`);
  }

  if (text === '/botavatar') {
    return bot.sendPhoto(chatId, './botavatar.jpg', {
      caption: 'Bu bizning botimizni avatar rasmi',
    });
  }

  if (text === '/sticker') {
    return bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.webp');
  }

  if (text === '/dinogame') {
    return bot.sendMessage(chatId, "O'yinni boshlang:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Dino game🦖", url: 'https://chromedino.com/' }]
        ]
      }
    });
  }

  if (text === '/portfolio') {
    return bot.sendMessage(chatId, "Muhammadziyo portfoliosini ko'rish:", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Portfolioni ko'rish",
              web_app: { url: "https://muhammadziyo011.netlify.app/" }
            }
          ]
        ],
      }
    });
  }

  if (text === '/inline_portfolio') {
    return bot.sendMessage(chatId, "Portfolioni ko'rish uchun tugmani bosing:", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Muhammadziyo portfoliosi",
              web_app: { url: "https://muhammadziyo011.netlify.app/" }
            }
          ]
        ]
      }
    });
  }

  // Agar hech narsa mos kelmasa:
  bot.sendMessage(chatId, "Uzur, men bu komandani tushunmadim!");
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === '/info') {
    return bot.sendMessage(chatId, `Ismingiz: ${query.from?.first_name || ''}, Familya: ${query.from?.last_name || ''}, Chat ID: ${chatId}`);
  }

  if (data === '/username') {
    return bot.sendMessage(chatId, `Sizning username: @${query.from?.username || 'yo\'q'}`);
  }

  if (data === '/botavatar') {
    return bot.sendPhoto(chatId, './botavatar.jpg', {
      caption: 'Bu bizning botimizni avatar rasmi',
    });
  }

  if (data === '/sticker') {
    return bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.webp');
  }

  if (data === '/dinogame') {
    return bot.sendMessage(chatId, "O'yinni boshlang:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Dino game🦖", url: 'https://chromedino.com/' }]
        ]
      }
    });
  }

  if (data === '/portfolio') {
    return bot.sendMessage(chatId, "Muhammadziyo portfoliosini ko'rish:", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Portfolioni ko'rish",
              web_app: { url: "https://muhammadziyo011.netlify.app/" }
            }
          ]
        ],
      }
    });
  }

  if (data === '/inline_portfolio') {
    return bot.sendMessage(chatId, "Portfolioni ko'rish uchun tugmani bosing:", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Muhammadziyo portfoliosi",
              web_app: { url: "https://muhammadziyo011.netlify.app/" }
            }
          ]
        ]
      }
    });
  }
});
