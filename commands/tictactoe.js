const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `tictactoe`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('**Please specify a member**')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}