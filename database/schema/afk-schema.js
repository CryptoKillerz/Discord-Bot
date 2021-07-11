const mongoose = require('mongoose');

const AFKSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    guildName: {
        type: String,
        required: true
    },
    AFK: {
        type: Boolean,
        default: null
    },
    AFK_Reason: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model("afk", AFKSchema)