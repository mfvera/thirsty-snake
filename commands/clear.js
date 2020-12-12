module.exports = {
    name: "clear",
    aliases: new Set(["prune", "clean"]),
    description: "Purges the channel's chat history of commands to this bot.",
    guildOnly: true,
    async execute(message, args) {
        console.log(`Clearing message history invoked by user ${message.author}`);
        const channel = message.channel;
        const notificationMessage = await channel.send("Cleanup time :recycle:!");
        const messages = await channel.messages.fetch({ limit: 100 });

        
        await channel.bulkDelete(messages.filter(msg => {
            return msg.author.id === this_bot_id && msg.id !== notificationMessage.id;
        }));
        await notificationMessage.delete();
        console.log(`Finished cleaning message history.`);
    },
};

const this_bot_id = process.env.CLIENT_ID