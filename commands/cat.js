const Discord = require('discord.js');
const axios = require('axios');
const Client = require('../structures/Client');
module.exports = {
    name: `cat`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/cat";
        const facts = "https://some-random-api.ml/facts/cat"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`Random Cat Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}