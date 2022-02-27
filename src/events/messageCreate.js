module.exports = async (client, message) => {
    if (message.author.bot) {
        return;
    }

    const prefix = "~";

    // Checking if the message starts with the prefix
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    // Checking if message consists only of prefix
    if (message.content.toLowerCase() == prefix.toLowerCase()) return;

    const args = message.content.slice(prefix.length).match(/\S+/g);

    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) {
        return;
    }

    command.run({ command, message, args, client });
};