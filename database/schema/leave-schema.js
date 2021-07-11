const mongoose = require('mongoose');

let LevSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
});

module.exports = mongoose.model('leaves', LevSchema)