require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const words = require("./words");

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === "!reroll") {
        console.log("Randomizing nickname...");
        message.member.setNickname(getRandomName());
    }
})

function getRandomName() {
    const adjective = choice(words.adjectives);
    const noun = choice(words.nouns);
    console.log(`adj: ${adjective}, noun: ${noun}`);
    return capitalizeFirst(adjective) + " " + capitalizeFirst(noun);
}

// Borrowed from: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

client.login(process.env.TOKEN);