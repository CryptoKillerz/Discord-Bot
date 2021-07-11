const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `say`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const messageToSay = args.join(" ");
        const sayEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag} says ${messageToSay}`)
          .setColor("RANDOM")
          .setTimestamp();
        try {
          await message.channel.send(sayEmbed);
        } catch (err) {
          console.log(err);
          message.channel.send('**I am not able to send that message.**')
        }
    }
}