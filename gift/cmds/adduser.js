// ©𝟮𝟬𝟮𝟰
// 𝐓𝐎𝐇𝐈𝐃 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨



const TelegramBot = require('node-telegram-bot-api');

module.exports = {
    config: {
        name: "add",
        author: "Tohid Tech",
        description: "Add a user to the group via invite link",
        category: "ᴀᴅᴍɪɴ",
        usage: "adduser <username|user_id>",
        usePrefix: true,
        role: 1
    },
    onStart: async function ({ bot, chatId, args, userId }) {
        if (args.length === 0) {
            return bot.sendMessage(chatId, "Please provide a username or user ID. Usage: .add <username|user_id>");
        }

        const target = args[0].replace('@', '');

        try {
            const chatMember = await bot.getChatMember(chatId, userId);
            if (!chatMember || chatMember.status !== 'administrator') {
                return bot.sendMessage(chatId, "You must be an admin to use this command.");
            }

            const inviteLink = await bot.createChatInviteLink(chatId, { member_limit: 1 });

            await bot.sendMessage(target, `You have been invited to join the group: ${inviteLink.invite_link}`);

            bot.sendMessage(chatId, `An invite link has been sent to ${target}.`);
        } catch (error) {
            console.error('Error adding user to group:', error);
            bot.sendMessage(chatId, "An error occurred while trying to add the user to the group.");
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝐓𝐎𝐇𝐈𝐃 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝐓𝐎𝐇𝐈𝐃𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
