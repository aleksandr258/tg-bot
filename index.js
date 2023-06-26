const token = "5901577766:AAGxrpo2zS6wp0vKu8qFsqc88YyLOnQkH_g";

const telegramApi = require("node-telegram-bot-api");

const bot = new telegramApi(token, {polling: true})


// bot.setMyCommands([
//     {command: "/start", description: "Начальное привествие"}
// ])
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     const commandsText = `
//       Список доступных команд:
//       /help - Выводит информацию о командах
//       /info - Выводит информацию о боте
//       /Создать карту`;
  
//     const keyboard = {
//       keyboard: [['/help', '/info', '/Создать карту']],
//       one_time_keyboard: true,
//     };
  
//     // bot.sendMessage(chatId, commandsText, { reply_markup: keyboard });
//   });
  
//   // Обработчик ввода текста
//   bot.onText(/(.+)/, (msg) => {
//     const chatId = msg.chat.id;
//     const messageText = msg.text;
  
//     // Ваш код обработки введенного текста здесь...
  
//     // Отправляем сообщение с полем ввода и панелью команд
//     const keyboard = {
//       keyboard: [['/help', '/info', '/Создать карту']],
//       resize_keyboard: true,
//     };
  
//     bot.sendMessage(chatId, 'Для создания карты выберите тему и стиль', { reply_markup: keyboard });
//   });
  

bot.on("message", (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Привет! Это бот который генерирует ваш собственный дизайн банковской карты");

    const mainKeyboard = {
        keyboard: [['/help', '/info', '/Создать карту']],
        resize_keyboard: true,
      };

    const keyboard = {
        inline_keyboard:[
            [
                { text: "Ландшафты", callback_data: "landscapeTheme" },
                { text: "Натюрморты", callback_data: "stillLife" },
            ],
            [
                { text: "Архитектура", callback_data: "architecture" },
                { text: "Геометрия", callback_data: "geometry" },
            ],
        ],
    };

    // const replyMarkup = {
    //     keyboard: mainKeyboard.keyboard,
    //     resize_keyboard: mainKeyboard.resize_keyboard,
    //     inline_keyboard: inlineKeyboard.inline_keyboard,
    // };

    bot.sendMessage(chatId, "Создать карту", { reply_markup: keyboard });
}) 


bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
    const buttonId = query.data;

    const keyboard = {
        inline_keyboard:[
            [
                { text: "Аниме", callback_data: "anime" },
                { text: "Ван Гог", callback_data: "VanGog" },
            ],
            [
                { text: "Пабло Пикассо", callback_data: "PabloPicasso" },
                { text: "Киберпанк", callback_data: "CyberPunk" },
            ],
        ],
    };

                
    if (buttonId === "landscapeTheme" || buttonId === "stillLife" || buttonId === "architecture" || buttonId === "geometry"){
        bot.sendMessage(chatId, "Выберите стиль:", {reply_markup: keyboard});
    }
})