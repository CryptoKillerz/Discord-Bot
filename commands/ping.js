const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `ping`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const pingEmbed = new Discord.MessageEmbed()
            .setTitle('Bot Ping')
            .setDescription(`⌛Bot Ping: ${client.ws.ping} ms`)
            .setColor('RANDOM')
            .setFooter(client.user.tag, client.user.displayAvatarURL())

        message.channel.send(pingEmbed);
    }
}