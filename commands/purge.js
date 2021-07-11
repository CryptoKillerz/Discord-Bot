const guildConfigSchema = require('../database/schema/guildConfigSchema');

const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `purge`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**You can not use this command.**');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**I do not have \`MANAGE_MESSAGES\` permissions.**');
    if (!args[0]) return message.channel.send('**You must state a number of messages to purge.** \`e!purge number\`');
    const amountToDelete = Number(args[0], 10);

    if (isNaN(amountToDelete)) return message.channel.send('**Number stated is not a valid number.**');
    if (!Number.isInteger(amountToDelete)) return message.channel.send("**Number stated must be a whole number.**");
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('**The number stated must be between 2 and 100.**');
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });
    const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

    const logchannel = message.guild.channels.cache.get(Log.logChannelID);

    if (!logchannel) return;

    try {
      await message.channel.bulkDelete(fetched)
        .then(messages => logchannel.send(`**Purge ${messages.size} messages!**`))
    } catch (err) {
      console.log(err);
      message.channel.send(`**I was unable to purge the amount stated make sure they are within 14 days old.**`)
    }
    }
}