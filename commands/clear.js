module.exports = {
    name: "clear",
    description: "Purges the channel's chat history of commands to this bot.",
    guildOnly: true,
    execute(message, args) {
        message.channel.send("Doesn't do anything yet, lmao.");
    },
};
