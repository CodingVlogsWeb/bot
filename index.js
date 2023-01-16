const Discord = require('discord.js');
const openai = require('openai');

// Set up the Discord client and OpenAI API key
const client = new Discord.Client();
openai.apiKey = "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";

// When the bot is ready, log to the console
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages sent to the bot
client.on('message', async message => {
    if (message.content.startsWith("!openai")) {
        // Use the OpenAI API to generate a response
        const response = await openai.Completion.create({
            prompt: message.content,
            model: "text-davinci-002"
        });
        // Send the response back to the Discord channel
        message.channel.send(response.choices[0].text);
    }
});

// Log in to Discord using the bot token
client.login("MTA1ODk4NzE1ODQ4MTkzNjM4NA.G81GGO.K4bpgiTTSTjACoaufjBDNdtsiHCgewjRf6SR_g");
