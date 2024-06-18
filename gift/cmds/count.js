// ©𝟮𝟬𝟮𝟰
// 𝐓𝐎𝐇𝐈𝐃 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨



const gifte = require('fs');
const gift = require('path');
const messageCountFile = gift.join(__dirname, './msgcount.json');


if (!gifte.existsSync(messageCountFile)) {
    gifte.writeFileSync(messageCountFile, JSON.stringify({}));
}

module.exports = {
    config: {
        name: "count",
        author: "tohid khan",
        description: "Count user messages in the chat",
        category: "ᴜᴛɪʟɪᴛʏ",
        usage: "count [all]",
        usePrefix: true
    },

    onStart: async function({ bot, chatId, msg, args }) {
        const userId = msg.from.id;
        const firstName = msg.from.first_name;


        const gifted = gifte.readFileSync(messageCountFile, 'utf8');
        const giftedCount = JSON.parse(gifted);

        if (!giftedCount[chatId]) {
            return bot.sendMessage(chatId, "No message data available for this chat.");
        }

        const chatMessageCounts = giftedCount[chatId];

        if (args[0] === 'all') {
        
            const userMessageCounts = await Promise.all(
                Object.entries(chatMessageCounts).map(async ([userId, count]) => {
                    const user = await bot.getChatMember(chatId, userId);
                    const username = user.user.username || `${user.user.first_name} ${user.user.last_name || ''}`;
                    return { userId, count, username };
                })
            );

            
            userMessageCounts.sort((a, b) => b.count - a.count);

            let giftech = "Number of messages of members:\n";
            userMessageCounts.forEach((user, index) => {
                giftech += `${index + 1}/ ${user.username}: ${user.count}\n`;
            });

            return bot.sendMessage(chatId, giftech);
        } else {
        
            const userMessageCount = chatMessageCounts[userId] || 0;

        
            const userMessageCounts = Object.entries(chatMessageCounts).map(([userId, count]) => ({ userId, count }));
            userMessageCounts.sort((a, b) => b.count - a.count);
            const userRank = userMessageCounts.findIndex(user => user.userId == userId) + 1;

            return bot.sendMessage(chatId, `You are ranked ${userRank} and have sent ${userMessageCount} messages in this group.`);
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝐓𝐎𝐇𝐈𝐃 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
