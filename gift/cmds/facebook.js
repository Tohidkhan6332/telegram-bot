// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨



const axios = require('axios');
const gift = require('fs');
const gifted = require('path');
const { Readable } = require('stream');

module.exports = {
    config: {
        name: "fbook",
        author: "Tohid khan",
        description: "Downloads video from provided link and sends it to the chat",
        category: "ᴅᴏᴡɴʟᴏᴀᴅᴇʀ",
        usage: ".fbook <url>",
        usePrefix: true
    },

    onStart: async function ({ bot, chatId, args }) {
        if (args.length === 0) {
            return bot.sendMessage(chatId, "Please provide facebook URL. Usage: .fbook <url>");
        }

        const giftace = args.join(" ");
        const Giftedte = `https://noobs-api2.onrender.com/dipto/alldl?url=${encodeURIComponent(giftace)}`;

        try {
            const giftech = await axios.get(Giftedte);
            const giftDevs = giftech.data.result; // Assuming the API returns a direct link to the video file.

            if (giftDevs) {
                const giftedStream = (await axios({
                    url: giftDevs,
                    method: 'GET',
                    responseType: 'stream'
                })).data;

                const giftedke = gifted.basename(new URL(giftDevs).pathname);
                const giftPath = gifted.join(__dirname, `/cache/${giftedke}`);
                
                const amgift = gift.createWriteStream(giftPath);

                giftedStream.pipe(amgift);

                await new Promise((resolve, reject) => {
                    amgift.on('finish', resolve);
                    amgift.on('error', reject);
                });

                // Send the video file
                await bot.sendVideo(chatId, giftPath);
                gift.unlinkSync(giftPath); // Clean up after sending
            } else {
                bot.sendMessage(chatId, "Please provide facebook video link for download. Usage: .fbook <url>");
            }
        } catch (error) {
            console.error("Error in Facebook downloader command:", error);
            bot.sendMessage(chatId, `Failed to download the video: ${error.message}`);
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
