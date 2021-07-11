const guildConfigSchema = require('../database/schema/guildConfigSchema');
const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `log`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
     run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**You do not have the permissions to use this command!**');
        const channel = await message.mentions.channels.first()
        if (!channel) return message.reply('You Did Not Mentions A Vaild Channel.').then(m => m.delete({ timeout: 5000 }));
        
        await guildConfigSchema.findOne({ guildID: message.guild.id }, async (error, data) => {
            if (error) return console.log(error)
            if (!data) {
                const newguildConfigSchema = guildConfigSchema({
                    guildID: message.guild.id,
                    prefix: `e!`,
                    logChannelID: channel.id
                })
                await newguildConfigSchema.save()
                return message.channel.send(`**${message.guild.name}'s log channel has now been set to <#${channel.id}>**`)
            } else {
                guildConfigSchema.updateOne({
                    logChannelID: data.logChannelID = channel.id
                })
                data.save()
                return message.channel.send(`**${message.guild.name}'s log channel has now been set to <#${channel.id}>**`)
            }
        })
    }
}