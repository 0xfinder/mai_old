const mongoose = require('mongoose');

require('dotenv').config();

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Don't build indexes
            autoIndex: false,
            // Keep trying to send operations for 5 seconds
            serverSelectionTimeoutMS: 5000,
            // Close sockets after 45 seconds of inactivity
            socketTimeoutMS: 45000,
            // Use IPv4, skip trying IPv6
            family: 4,
        };

        // Somehow this works and connects so don't change it thanks
        mongoose.connect(process.env.MONGODB_URI, dbOptions);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose has successfully connected!');
        });

        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose connection lost');
        });
    },
};