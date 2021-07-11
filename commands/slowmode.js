const guildConfigSchema = require('../database/schema/guildConfigSchema');

const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `slowmode`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('**You do not have permission to use this command');

        // ?slowmode 100
    
        const value = Number(args[0]);
    
        if (!args[0]) return message.channel.send('**You need to state a number in which how long you would like the slowmode to be.**');
        if (!value || value < 5 || value > 21600) return message.channel.send('**You need to state a number between 5 and 21600, which represents the second the slowmode will be.**');

        const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

        const logchannel = message.guild.channels.cache.get(Log.logChannelID);

        if (!logchannel) return;

        try {
          await message.channel.setRateLimitPerUser(value);
          logchannel.send(`**The slowmode for ${message.channel} is set to ${value} seconds.**\n**By Moderator:** ${message.author.tag}`);
        } catch (err) {
          console.log(err);
          message.channel.send('**Something went wrong setting the slowmode.**');
        }
    }
}