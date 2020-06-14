const { getRandomName } = require("../wordLib");

module.exports = {
    name: "suggest",
    description: "Produces a random name but does not change the sender's name.",
    guildOnly: false,
    execute(message, args) {
        const response = getRandomName();
        console.log(`Suggesting ${response} to user ${message.author}`);
        message.reply(response);
    },
};
