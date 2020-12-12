const { getRandomName } = require("../wordLib");

module.exports = {
    name: "reroll",
    aliases: new Set(["rename", "changename"]),
    description: "Randomize/reroll the sender's name.",
    guildOnly: true,
    execute(message, args) {
        const name = getRandomName();
        console.log(`Setting nickname of ${message.author} to ${name}`);
        message.member.setNickname(name);
    },
};
