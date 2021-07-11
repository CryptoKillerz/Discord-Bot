const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `createchannel`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**You do not have the permissions to use this command**');

        const channelNameQuery = args.join(" ");
        if(!channelNameQuery) return message.channel.send('**Please specify a channel name!**');

        message.guild.channels.create(channelNameQuery).then((ch) => {
            message.channel.send(`**Click ${ch} to access the newly created channel!**`);
        })
    }
}