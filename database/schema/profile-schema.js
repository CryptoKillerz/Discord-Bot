const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userName: { type: String, require: true, unique: true},
    serverName: { type: String, require: true},
    coins: { type: Number, default: 1000},
    bank: { type: Number}
})

const model = mongoose.model('Profiles', profileSchema);

module.exports = model;