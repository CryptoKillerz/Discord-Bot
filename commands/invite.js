const Discord = require('discord.js');
const moment = require("moment");
const Client = require('../structures/Client');
module.exports = {
    name: `invite`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const inviteembed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
        .setTimestamp()
        .setColor(`RANDOM`)
          .setTitle('Invite Link')
          .setDescription(`**⚜ : Bot Invite Link :** [Click Me](https://discord.com/api/oauth2/authorize?client_id=838798913761706014&permissions=8&scope=bot)\n**⚜ : Discord Server :** [Click Me](https://discord.gg/bGJJY8EBk5)`)

      message.delete();
      message.channel.send(inviteembed);
    }
}