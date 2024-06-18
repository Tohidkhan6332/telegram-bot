// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨



module.exports = {
    config: {
        name: "eval",
        author: "Tohid khan",
        description: "Execute JavaScript code (admin only)",
        category: "ᴀᴅᴍɪɴ",
        usage: "eval <code>",
        usePrefix: true,
        role: 2


    },
    onStart: async function ({ bot, chatId, userId, args, msg, adminId }) {

        const gift = args.join(' ');

        if (!gift) {
            return bot.sendMessage(chatId, `Please provide some code to execute. Usage: .eval <code>`);
        }

        try {
            let gifted = await eval(gift);
            if (typeof gifted !== 'string') {
                gifted = require('util').inspect(gifted);
            }


 bot.sendMessage(adminId, `Result: ${gifted}`);


        } catch (error) {
            console.error('[ERROR]', error);
            bot.sendMessage(chatId, `Error: ${error.message}`);
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
