const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [''],
    category: "Utility",
    run: async ({ client, message }) => {
        const msg = await message.channel.send('🏓 Pinging...');

        try {
            const embed = new MessageEmbed()
                .setColor('#ffb347')
                .setTitle('🏓 Pong!')
                .setDescription(`Bot Latency is **${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms** \nAPI Latency is **${Math.round(client.ws.ping)} ms**`);

            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(client.ws);
            console.log(error);
        }
    },
};