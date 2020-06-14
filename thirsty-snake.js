require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { getRandomName } = require("./wordLib");

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    // Nickname property only exists on a Guild. DM's exist outside of guilds and kill the bot.
    if (message.guild !== null) {
        if (message.content === "!reroll") {
            console.log("Randomizing nickname...");
            message.member.setNickname(getRandomName());
        }
    }
})


client.login(process.env.TOKEN);