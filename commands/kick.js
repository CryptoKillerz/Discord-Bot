const guildConfigSchema = require('../database/schema/guildConfigSchema');
const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `kick`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You cannot use this command");
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    // e!kick @user reason
    if (!args[0]) return message.channel.send("**You need to state a user to kick.** \`?kick @user reason\`");
    if (!mentionedMember) return message.channel.send("**The member mentioned is not in the server.**");

    const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

    const logchannel = message.guild.channels.cache.get(Log.logChannelID);

    if (!logchannel) return;

    try {
      await mentionedMember.send(kickEmbed);
      await logchannel.send(kickEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send("**I was unable to kick that member mentioned.**");
    }

    try {
      await mentionedMember.kick(reason);
    } catch (err) {
      console.log(err);
      message.channel.send("**I was unable to kick that member mentioned.**");
    }
    }
}