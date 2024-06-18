// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨


const config = require('./config.json');
const axios = require('axios');

module.exports = {
    config: {
        name: "url",
        author: "tohid khan",
        description: "Send a link of the replied file",
        category: "ᴜᴛɪʟɪᴛʏ",
        usage: "sendfilelink",
        usePrefix: true
    },
    onStart: async function ({ bot, chatId, msg }) {
        if (!msg.reply_to_message || !(msg.reply_to_message.audio || msg.reply_to_message.video || msg.reply_to_message.photo)) {
            return bot.sendMessage(chatId, "Please reply to an audio, video, or photo message to send its file link.");
        }

        try {
            const fileId = msg.reply_to_message.audio ? msg.reply_to_message.audio.file_id : 
                            msg.reply_to_message.video ? msg.reply_to_message.video.file_id : 
                            msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;

            const fileDetails = await bot.getFile(fileId);
            const fileLink = `https://api.telegram.org/file/bot${config.token}/${fileDetails.file_path}`;
            const telegraphUrl = `https://apis-samir.onrender.com/telegraph?url=${encodeURIComponent(fileLink)}&senderId=4679926`;

            const response = await axios.get(telegraphUrl);
            const link = response.data.result.link;

            bot.sendMessage(chatId, `File Link: ${link}`);
        } catch (error) {
            console.error('[ERROR]', error);
            bot.sendMessage(chatId, "An error occurred while processing the command.");
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
