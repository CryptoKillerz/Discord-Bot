const Discord = require('discord.js');
const axios = require('axios');
const Client = require('../structures/Client');
module.exports = {
    name: `hug`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`@${message.author.username} hugs @${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}