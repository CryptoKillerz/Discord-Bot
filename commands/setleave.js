const Discord = require('discord.js');
const LevSchema = require('../database/schema/leave-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `setleave`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**You do not have permissions to use this command!');

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('**please specify a channel you would like as your leave channel!**');

        LevSchema.findOne({ guildId: message.guild.id }, async (err, data) => {
            if (data) {
                data.channelId = channel.id;
                data.save();
            } else {
                new LevSchema({
                    guildId: message.guild.id,
                    channelId: channel.id,
                }).save();
            }
            message.reply(`**The leave channel has been set to: ${channel}!**`);
        })
    }
}