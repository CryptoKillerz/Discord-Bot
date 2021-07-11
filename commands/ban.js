const guildConfigSchema = require('../database/schema/guildConfigSchema');

const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `ban`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
      //Permissions Checking:
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**You do not have the permissions to ban someone.**');

    //Variables:
    let reason = args.slice(1).join(" ");
    const member = message.mentions.members.first();

    //Input Checking:
    if (!reason) reasson: 'No reason given.';
    if (!args[0]) return message.channel.send('**You must state someone to ban.** \`e!ban @user reason\`');
    if (!member) return message.channel.send('**The member mentioned is not in the server.**');
    if (!member.bannable) return message.channel.send('**You cannot ban members with the same role or higher.**');

    //Executing:
    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been banned from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`Banned: ${member.user.tag}`)

      const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

      const logchannel = message.guild.channels.cache.get(Log.logChannelID);

      if (!logchannel) return;

    logchannel.send(banEmbed);
    member.send(banEmbed).catch(err => console.log(err));
    member.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => logchannel.send("**Successfully banned **" + member.user.tag));
    }
}