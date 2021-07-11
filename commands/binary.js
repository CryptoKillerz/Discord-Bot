const Discord = require('discord.js');
const axios = require('axios');
const Client = require('../structures/Client');
module.exports = {
    name: `binary`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle('Text to Binary')
            .setDescription(data.binary)

        await message.channel.send(embed)
    }
}