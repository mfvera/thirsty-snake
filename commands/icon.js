module.exports = {
    name: "icon",
    aliases: new Set(["avatar"]),
    description: "Grabs the link to someone's avatar/icon for download.",
    guildOnly: false,
    execute(message, args) {
        if (message.mentions.users.size === 0) {
            console.log(`Getting avatar for ${message.author};`);
            return message.reply(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        console.log(`Getting avatar(s) for ${message.mentions.users.map(user => user.username).join(', ')}; in response to user ${message.author}`);
        message.reply(message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        }).join('\n'));
    },
};
