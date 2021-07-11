const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `shop`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayColor)
            .setTitle(`${message.guild.name} Shop`)
            .setDescription(`Welcome To The Store <@${message.author.id}>`)
            .addFields(
                {
                    name: '🍌 Banana - $50',
                    value: 'This Item Is Used To Get Some More Engery'
                },
                {
                    name: '🍏 Apples - $50',
                    value: 'This Item Is Used To Get Some More Engery'
                },
                {
                    name: '📱 Phone - $120',
                    value: 'This Item Is Used To Boost The Amount Of Money You Get'
                },
                {
                    name: '🔒 Lock - $500',
                    value: 'This Item Is Used To lock your bank from people Stealing'
                },
                {
                    name: '🔪 Knfie - $850',
                    value: 'The Knife Is Used To Kill Your Friends lol'
                },
                {
                    name: '🔫 Gun - $6000',
                    value: 'The Gun Is Used To Kill Your Friends lol'
                },
                {
                    name: '🐶 Dog - $10000',
                    value: 'Man\'s Best Friend'
                }
            )
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setTimestamp();
            message.channel.send(embed)
    }
}