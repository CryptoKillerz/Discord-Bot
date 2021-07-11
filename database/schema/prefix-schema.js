const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
    Prefix: {
        type: String
    },
    GuildName: String
});

const MessageModel = module.exports = mongoose.model('prefix', PrefixSchema);