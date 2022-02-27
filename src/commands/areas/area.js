const AreaInterface = require('./AreaInterface.js');

module.exports = {
    name: 'area',
    aliases: [''],
    category: "Areas",
    description: "Travels to an area.",
    syntax: "[area's id or name]",
    async run({ message, args }) {

        if (!args[0]) {
            return message.channel.send(`You need to specify an area.\n` +
                `Correct usage: \`{prefix}area ${this.syntax}\``);
        }

        const input = Number.isNaN(parseInt(args[0])) ? { type: 'name', value: args[0] } : { type: 'id', value: parseInt(args[0]) };

        const area = await getArea(input, message);

        if (!area) {
            return;
        }

        const areaEmbed = {
            color: 0xffb347,
            author: {
                name: `${message.author.username}'s travel`,
                icon_url: message.author.displayAvatarURL({ dynamic: true }),
            },
            description: `You travelled to floor 1 of **${area.getName}**`,
            image: {
                url: area.getImageURL,
            },
            footer: {
                text: `View all areas with \`{prefix}areas\``,
            },
        };

        message.channel.send({ embeds: [areaEmbed] });
    },
};

function getArea(input, message) {
    if (input.type === 'name') {
        console.log(Object.entries(AreaInterface.areas));
        for (const [, areaClass] of Object.entries(AreaInterface.areas)) {
            if (areaClass.getName.toLowerCase() === input.value.toLowerCase()) {
                return areaClass;
            }
        }
        message.channel.send(`You need to specify a valid area name.\n` +
            `Correct usage: \`{prefix}area ${this.syntax}\``);
        return;
    }

    if (input.type === 'id') {
        for (const [, areaClass] of Object.entries(AreaInterface.areas)) {
            if (areaClass.getID === input.value) {
                return areaClass;
            }
        }
        message.channel.send(`You need to specify a valid area id.\n` +
            `Correct usage: \`{prefix}area ${this.syntax}\``);
        return;
    }
}