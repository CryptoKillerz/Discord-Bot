const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `roles`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member || message.guild.members.cache.find(u => u.id === args[0])
        if(!user) return message.reply("Please give a valid user!")
        
        const userRoles = user.roles.cache
        .filter((role) => role.id !== message.guild.id)
        .map((roles) => roles.toString())
        .join(", ")

        let embed = new Discord.MessageEmbed()
        .addField("Roles", userRoles)
        .setFooter(user.user.tag, user.user.displayAvatarURL({ dynamic: true}))
        message.channel.send(embed) 
    }
}