const mongoose = require('mongoose');

const guildConfigSchema = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    prefix: {
        type: mongoose.SchemaTypes.String,
        required: false,
        default: `${process.env.PREFIX}`
    },
    logChannelID: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    welcomeChannelID: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    memberRole: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    premium: {
        type: mongoose.SchemaTypes.Boolean,
        required: false,
        default: false,
    }
});

module.exports = mongoose.model('GuildConfig', guildConfigSchema);