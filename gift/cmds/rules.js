// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨


let rules = [];

module.exports = {
    config: {
        name: "rules",
        author: "tohid Khan",
        description: "Manage group rules",
        category: "ɢʀᴏᴜᴘ",
        usage: "add <rule>, modify <index> | <new rule>, delete <index>",
        usePrefix: true,
        role: 1
    },

    onStart: async function ({ bot, chatId, args }) {
        const action = args.shift();
        const ruleIndex = parseInt(args.shift());

        switch(action) {
            case 'add':
                const newRule = args.join(' ');
                rules.push(newRule);
                bot.sendMessage(chatId, `Rule added: ${newRule}`);
                break;
            case 'modify':
                const newRuleText = args.slice(1).join(' ');
                if (ruleIndex >= 1 && ruleIndex <= rules.length) {
                    rules[ruleIndex - 1] = newRuleText;
                    bot.sendMessage(chatId, `Rule modified: ${newRuleText}`);
                } else {
                    bot.sendMessage(chatId, `Rule index ${ruleIndex} is invalid.`);
                }
                break;
            case 'delete':
                if (ruleIndex >= 1 && ruleIndex <= rules.length) {
                    const deletedRule = rules.splice(ruleIndex - 1, 1)[0];
                    bot.sendMessage(chatId, `Rule deleted: ${deletedRule}`);
                } else {
                    bot.sendMessage(chatId, `Rule index ${ruleIndex} is invalid.`);
                }
                break;
            default:
                displayRules(bot, chatId);
        }
    }
};

function displayRules(bot, chatId) {
    if (rules.length === 0) {
        bot.sendMessage(chatId, "No rules available.");
    } else {
        let rulesList = "Group Rules:\n";
        rules.forEach((rule, index) => {
            rulesList += `${index + 1}. ${rule}\n`;
        });
        bot.sendMessage(chatId, rulesList);
    }
}



// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
