const Discord = require('discord.js');
const fetch = require('node-fetch');
const Client = require('../structures/Client');
module.exports = {
    name: `neko`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
      var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('**You must use this command in an nsfw lounge**!') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Please wait...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hneko'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[Image not loading? Click here](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);
        });
    });
    }
}