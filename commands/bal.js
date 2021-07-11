const Discord = require('discord.js');
const Profiles = require('../database/schema/profile-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `bal`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!member) return message.reply('**Sorry, I Cannot Find That User You Have Mention.**');

        const profile = await Profiles.findOne({ userName: message.author.tag })


        if (!profile) return message.reply('**Sorry, This User Does Not Have An Account. If You Can Tell Him/Her To Do `:beg` For The Account To Create.**');

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, format: 'png' }))
            .addFields(
                {
                    name: 'Cash',
                    value: `$${profile.coins}`
                },
                {
                    name: 'Bank',
                    value: `$${profile.bank}`
                }
            )
            .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true, format: 'png' }))
            .setTimestamp();
        message.channel.send(embed)
    }
}