const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `avatar`,
    aliases: ['av'],
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const avaembed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}`)
        .setImage(message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setTimestamp()
  
        return message.channel.send(avaembed)
    }
}