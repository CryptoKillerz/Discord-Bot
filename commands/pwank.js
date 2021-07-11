const Discord = require('discord.js');
const fetch = require('node-fetch');
const Client = require('../structures/Client');
module.exports = {
    name: `pwank`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const url = await fetch('https://nekos.life/api/v2/img/pwankg')
			.then(response => response.json())
			.then(body => body.url);
        const embed = new Discord.MessageEmbed()
            .setColor('#363942')
            .setImage(url);

        message.channel.send(embed);
	}
}