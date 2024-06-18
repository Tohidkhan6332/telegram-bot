// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨


const axios = require('axios');

module.exports = {
    config: {
        name: "weather",
        author: "Gifted Tech",
        description: "Fetch and display weather information",
        category: "sᴇᴀʀᴄʜ",
        usage: "weather <city>",
        usePrefix: true,
        role: 0
    },

    onStart: async function ({ bot, chatId, args }) {
        const city = args.join(' ');

        if (!city) {
            bot.sendMessage(chatId, "🌆 Please provide a city name.");
            return;
        }

        try {
            const apiUrl = `https://apis-samir.onrender.com/weather/${encodeURIComponent(city)}`;
            const response = await axios.get(apiUrl);
            const weatherData = response.data;

            const message = `
𝗪𝗘𝗔𝗧𝗛𝗘𝗥 𝗕𝗬 𝐓𝐎𝐇𝐈𝐃-𝗠𝗗
🌤️ **Weather Information for ${weatherData.city}, ${weatherData.country}:**

🌡️ **Temperature:** ${weatherData.temperature.celsius}°C (${weatherData.temperature.fahrenheit}°F)
☁️ **Condition:** ${weatherData.condition.text}
💧 **Humidity:** ${weatherData.humidity}%
🌬️ **Wind:** ${weatherData.wind.speed_kph} kph (${weatherData.wind.speed_mph} mph) ${weatherData.wind.direction}
📏 **Pressure:** ${weatherData.pressure.mb} mb (${weatherData.pressure.in} in)
🌧️ **Precipitation:** ${weatherData.precipitation.mm} mm (${weatherData.precipitation.inches} in)
☁️ **Cloudiness:** ${weatherData.cloudiness}%
👁️ **Visibility:** ${weatherData.visibility.km} km (${weatherData.visibility.miles} miles)
🌞 **UV Index:** ${weatherData.uv_index}
🔥 **Feels Like:** ${weatherData.feels_like.celsius}°C (${weatherData.feels_like.fahrenheit}°F)
🕒 **Local Time:** ${weatherData.localtime}

🌫️ **Air Quality Index:**
- **CO:** ${weatherData.air_quality.co}
- **NO₂:** ${weatherData.air_quality.no2}
- **O₃:** ${weatherData.air_quality.o3}
- **SO₂:** ${weatherData.air_quality.so2}
- **PM2.5:** ${weatherData.air_quality.pm2_5}
- **PM10:** ${weatherData.air_quality.pm10}
- **US EPA Index:** ${weatherData.air_quality.us_epa_index}
- **GB DEFRA Index:** ${weatherData.air_quality.gb_defra_index}
           `.trim();

            await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
        } catch (error) {
            console.error('Error fetching weather data:', error);
            bot.sendMessage(chatId, '⚠️ Sorry, an error occurred while fetching the weather data.');
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
                                                     
