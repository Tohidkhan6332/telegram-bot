// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨



const axios = require('axios');
const fs = require('fs');
const path = require('path');


module.exports = {
    config: {
        name: "sticker",
        author: "tohid khan",
        description: "create fake telegram message ",
        category: "ғᴜɴ",
        usage: "sticker [prompt]",
        usePrefix: true
    },

    onStart: async function({ bot, chatId, msg, args }) {
        const gift = args.join(' ');

        try {
            const userId = msg.reply_to_message ? msg.reply_to_message.from.id : msg.from.id;
            const username = msg.reply_to_message ? msg.reply_to_message.from.first_name : msg.from.first_name;




            
            const gifte = await bot.getUserProfilePhotos(userId);

            if (!gifte || !gifte.total_count) {
                return bot.sendMessage(chatId, "No profile photos found.");
            }

            const fileId = gifte.photos[0][0].file_id;
            const fileLink = await bot.getFileLink(fileId);

            const telegraphUrl = `https://apis-samir.onrender.com/telegraph?url=${encodeURIComponent(fileLink)}&senderId=4679926`;

            const giftech = await axios.get(telegraphUrl);
            const linkgift = giftech.data.result.link;

            const giftedUrl = `https://apis-samir.onrender.com/q?text=${encodeURIComponent(gift)}&avatar=${linkgift}&username=${username}`;

            const giftResponse = await axios.get(giftedUrl, { responseType: 'arraybuffer' });
            const giftPath = path.join(__dirname, 'image.png');

            fs.writeFile(giftPath, giftResponse.data, 'binary', async (err) => {
                if (err) throw err;

                await bot.sendSticker(chatId, giftPath, { caption: "Here is your image." });
                fs.unlinkSync(giftPath); 
            });
        } catch (error) {
            console.error('[ERROR]', error);
            bot.sendMessage(chatId, 'An error occurred while processing the command.');
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
