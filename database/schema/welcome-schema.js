const mongoose = require('mongoose');

let WelSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
});

module.exports = mongoose.model('welcomes', WelSchema)