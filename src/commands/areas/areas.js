const AreaInterface = require('./AreaInterface.js');

module.exports = {
    name: 'areas',
    aliases: [''],
    category: "Areas",
    async run({ client, message }) {
        console.log(AreaInterface.areas);

        const areasEmbed = {
            color: 0xffb347,
            title: 'Areas 🗺️',
            author: {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({ dynamic: true }),
            },
            description: 'All the areas are listed down below. You are currently at {area-floor}.',
            thumbnail: {
                url: client.user.displayAvatarURL({ dynamic: true }),
            },
            fields: [],
            footer: {
                text: 'Page 69 | Areas: 69 / 420',
            },
        };

        for (const id in AreaInterface.areas) {
            const area = AreaInterface.areas[id];
            areasEmbed.fields.push({
                name: `${area.getID}. ${area.getName}`,
                value: `${area.getDesc}`,
            });
        }

        message.channel.send({ embeds: [areasEmbed] });
    },
};

// fields: [
//     {
//         name: 'Regular field title',
//         value: 'Some value here',
//     },
//     {
//         name: '\u200b',
//         value: '\u200b',
//         inline: false,
//     },
// ],