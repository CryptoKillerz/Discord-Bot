const Discord = require('discord.js');
const Schema = require('../database/schema/leave-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `simleave`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if(message.author.id != '791757304797331466') return;
        client.emit('guildMemberRemove', message.member);
    }
}