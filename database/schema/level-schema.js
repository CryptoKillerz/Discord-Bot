const mongoose = require('mongoose');

const LvLSchema = mongoose.Schema({
    guildId: String,
    toggle: Number,
})

module.exports = mongoose.model("lvl", LvLSchema)