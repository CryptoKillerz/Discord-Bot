const Discord = require('discord.js');
const fetch = require('node-fetch');
const Client = require('../structures/Client');
module.exports = {
    name: `lesbian`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const { url } = await fetch("https://nekos.life/api/v2/img/les")
      .then((res) => res.json());

    const embed = new Discord.MessageEmbed()
      .setTitle("Lesbian Hentai")
      .setImage(url)
      .setTimestamp()

    message.channel.send(embed)
    }
}