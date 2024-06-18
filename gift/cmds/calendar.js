// ©𝟮𝟬𝟮𝟰
// 𝐓𝐎𝐇𝐈𝐃 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨



const Gifted = require('telegram-inline-calendar');

module.exports = {
    config: {
        name: "calendar",
        author: "Tohid khan",
        description: "Display an interactive calendar",
        category: "ᴜᴛɪʟɪᴛʏ",
        usage: ".calendar",
        usePrefix: true
    },

    onStart: async function({ bot, chatId, msg }) {
        const gifted = new tohid(bot, {
            date_format: 'DD-MM-YYYY',
            language: 'en'
        });

        gifted.startNavCalendar(msg);

        bot.on("callback_query", (query) => {
            if (query.message.message_id == tohid.chats.get(query.message.chat.id)) {
                const res = gifted.clickButtonCalendar(query);
                if (res !== -1) {
                    bot.sendMessage(query.message.chat.id, "You selected: " + res);
                }
            }
        });
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝐓𝐎𝐇𝐈𝐃 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
