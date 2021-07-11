const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `coinflip`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const choices = ['heads', 'tails'];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        const Coins = Math.floor(Math.random() * (300));
        let embed = new Discord.MessageEmbed()
            .setTitle('CoinFlip!')
            .setDescription(`You flipped a ${choice}, and won ${Coins} coins!`)

            message.channel.send(embed);
    }
}