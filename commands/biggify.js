module.exports = {
    name: "biggify",
    aliases: new Set(["embiggen", "ultrabold"]),
    description: "Enlarge given text because sometimes, bold just isn't big enough.",
    guildOnly: false,
    execute(message, args) {
        const response = buildBiggifiedText(args);
        console.log(`Enlarging text: ${args.join(" ")}; in response to user ${message.author}`);
        if (response.length > 2000) {
            message.reply("Message too big for he gotdamn feet.");
            return;
        }
        message.channel.send(response);
        if (message.guild !== null) {
            message.delete();
        }
    },
};

function buildBiggifiedText(words) {
    return words.map((word) => {
        return word.toLowerCase().split('').map((char) => {
            if (/[A-Za-z]/.test(char)) {
                return `:regional_indicator_${char}:`;
            }
            switch (char) {
                case "0":
                    return ":zero:";
                case "1":
                    return ":one:";
                case "2":
                    return ":two:";
                case "3":
                    return ":three:";
                case "4":
                    return ":four:";
                case "5":
                    return ":five:";
                case "6":
                    return ":six:";
                case "7":
                    return ":seven:";
                case "8":
                    return ":eight:";
                case "9":
                    return ":nine:";
                case "*":
                    return ":asterisk:";
                case "?":
                    return ":question:";
                case "!":
                    return ":exclamation:";
                default:
                    return char; // Because most characters are not supported by emojis D:
            }
        }).join(" "); // Emojis need at least a space of separation.
    }).join("     "); // Emoji words need a little more spacing
}
