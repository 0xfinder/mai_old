module.exports = async client => {
    client.user.setPresence({
        activities: [
            { name: `with ${client.guilds.cache.size.toLocaleString()} waifus`, type: "PLAYING" },
        ],
        status: "online",
    });

    console.log(`${client.user.username} has been restarted.`);
};