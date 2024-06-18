// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨


const fs = require('fs');
const path = require('path');
const chatGroupsFile = path.join(__dirname, './grpchats.json');

if (!fs.existsSync(chatGroupsFile)) {
    fs.writeFileSync(chatGroupsFile, JSON.stringify([]), 'utf8');
}

let chatGroups = JSON.parse(fs.readFileSync(chatGroupsFile, 'utf8'));

module.exports = {
    config: {
        name: "notify",
        author: "tohid khan",
        description: "Send a notification to all chat groups",
        category: "ᴀᴅᴍɪɴ",
        usage: ".notify <message>",
        usePrefix: true
    },

    onStart: async function ({ bot, chatId, args }) {
        const message = args.join(' ');

        if (!message) {
            return bot.sendMessage(chatId, "Please provide a message to send. Usage: .notify <message>");
        }

        if (chatGroups.length === 0) {
            return bot.sendMessage(chatId, "No chat groups found to send the message.");
        }

        for (const groupId of chatGroups) {
            try {
                await bot.sendMessage(groupId, message);
            } catch (error) {
                console.error(`Error sending message to group ${groupId}:`, error);
            }
        }

        bot.sendMessage(chatId, "Notification sent to all chat groups.");
    }
};



// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
