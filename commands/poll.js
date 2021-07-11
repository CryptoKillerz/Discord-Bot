const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `poll`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**You do not have permission to use this command!**');

        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply("Please specify a channel you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("POLL TIME")
        .setDescription(theDescription)
        .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator) //optional

        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}