const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `rate`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        let number = Math.floor(Math.random() * 101);
            return message.channel.send('**I would rate you a '+number+'/100**')
    }
}