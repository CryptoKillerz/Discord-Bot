const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `deletechannel`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**You do not have the permissions to use this command**');

        const channelTarget = message.mentions.channels.first() || message.channel;

        channelTarget.delete().then((ch) => {
            message.channel.send(`**${ch} has been deleted**`)
        })
    }
}