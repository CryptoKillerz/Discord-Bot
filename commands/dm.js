const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `dm`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const mentionedMember = message.mentions.members.first();
        if(!mentionedMember) return message.channel.send('**Please specify a user you want to send this message to!**')

        const msg = args.slice(1).join(" ");
        if(!msg) return message.channel.send('**Please tell me a message you would like me to directly send!**')

        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username} sent you this`)
            .setDescription(msg)
            .setFooter(`Sent by: ${message.author.username}#${message.author.discriminator}, From ${message.guild.name}`)

            try {
                message.delete();
                await mentionedMember.send(embed)
                message.channel.send('💨 **Sent!**')
            } catch (err) {
                return message.channel.send('**I was unable to send the DM!')
            }
    }
}