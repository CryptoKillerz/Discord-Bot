const guildConfigSchema = require('../database/schema/guildConfigSchema');

const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `lockchannel`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
      if (!message.member.hasPermission("MANGE_CHANNELS")) return message.channel.send('**You do not have permission to use this command.**');

      const role = message.guild.roles.cache.find(r => r.name === 'Muted');
      let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
      if (!lockChannel) lockChannel = message.channel;
      if (!role) {
        message.channel.send('**Please make a \`Muted\` role!**')
      }
      const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

      const logchannel = message.guild.channels.cache.get(Log.logChannelID);

      if (!logchannel) return;
  
      await lockChannel.updateOverwrite(role, {
        SEND_MESSAGES: false
      }).catch(err => console.log(err));
      message.delete();
      logchannel.send(`**The channel has been locked** :lock:\n**By Moderator:** ${message.author.tag}`);
    }
}