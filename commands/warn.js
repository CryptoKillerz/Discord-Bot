const guildConfigSchema = require('../database/schema/guildConfigSchema');

const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `warn`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
      const guildID = message.guild.Discord
      const UserId = message.member.id
      const Reason = args.splice(1).join(' ')
      let User = message.mentions.users.first()

      if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('**You must have permissions to use this command.**');
        try {
          member = await message.guild.members.find(message.mentions.users.first())
        } catch (err) {
          var WarnEmbed = new Discord.MessageEmbed()
            .setTitle("Official Warning")
            .setColor('RANDOM')
            .addFields({
              name: 'User',
              value: User
            }, {
              name: 'Reason',
              value: Reason
            }, {
              name: 'To Do',
              value: 'Re-read rules\naccept punishment if failed to comply'
            })
            .setFooter(`Moderator: ${message.author.tag}`)
            .setTimestamp()
        }

        const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

        const logchannel = message.guild.channels.cache.get(Log.logChannelID);

        if (!logchannel) return;

        try {
          User.send(WarnEmbed)
          logchannel.send(WarnEmbed)
        } catch (err) {
          return (message.channel.send('**You must format the command e!<@mention> <reason>**'))
        }
    }
}