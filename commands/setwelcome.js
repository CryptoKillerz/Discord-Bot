const Discord = require('discord.js');
const WelSchema = require('../database/schema/welcome-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `setwelcome`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**You do not have permissions to use this command!');

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('**please specify a channel you would like as your welcome channel!**');

        WelSchema.findOne({ guildId: message.guild.id }, async (err, data) => {
            if (data) {
                data.channelId = channel.id;
                data.save();
            } else {
                new WelSchema({
                    guildId: message.guild.id,
                    channelId: channel.id,
                }).save();
            }
            message.reply(`**The welcome channel has been set to: ${channel}!**`);
        })
    }
}