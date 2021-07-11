const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `ticket`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.tag}`)) {
            return message.reply('**you already have a ticket, please close your exsisting ticket first before opening a new one!**');
          }
      
          message.guild.channels.create(`ticket-${message.author.tag}`, {
            permissionOverwrites: [{
                id: message.author.id,
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS', 'ATTACH_FILES'],
              },
              {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
              },
            ],
            type: 'text',
          }).then(async channel => {
            message.reply(`**you have successfully created a ticket! Please click on ${channel} to view your ticket.**`);
            channel.send(`**Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly.**`);
          });
    }
}