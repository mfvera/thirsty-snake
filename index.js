require("dotenv").config();

let { prefix } = require("./config");

const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();

// Dynamic linking of commands from https://discordjs.guide/command-handling/#individual-command-files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("Bot has started!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandString = args.shift().toLowerCase();

    if (!client.commands.has(commandString)) return;
    const command = client.commands.get(commandString);

    if (command.guildOnly && message.guild === null) {
        console.warn(`Command ${commandString} was called within DM's`);
        return message.reply("Command cannot be executed in DM's!");
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("Bad things have happened: " + error);
    }
});

client.login(process.env.TOKEN);
