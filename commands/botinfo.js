const Discord = require('discord.js');
const moment = require('moment');
const Client = require('../structures/Client');
module.exports = {
    name: `botinfo`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const botembed = new Discord.MessageEmbed()
      .setTitle(`Bot's Info`)
      .setColor('RANDOM')
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .addField(`**General:**`, [
        `**Username:** ${client.user.tag}`,
        `**ID:** ${client.user.id}`,
        `**Created At:** ${moment(client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`,
        `**Bot Owners:** 𝓑𝓪𝓭𝓚𝓪𝓻𝓶𝓪#0644`
      ])
      .addField(`Status:`, [
        `**Servers:** ${client.guilds.cache.size}`,
        `**Channels:** ${client.channels.cache.size}`,
        `**Users:** ${client.users.cache.size}`,
        `**Discord.js Version:** 12.5.3`
      ])
      message.channel.send(botembed)
    }
}