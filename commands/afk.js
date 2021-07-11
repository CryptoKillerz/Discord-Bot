const Discord = require('discord.js');
const schema = require('../database/schema/afk-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `afk`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        let data;
        const answer = args.join(' ');

        const embed = new Discord.MessageEmbed()
            .setTitle('AFK Mode')
            .setDescription('You are now AFK!')
            .setTimestamp();

        try {
            data = await schema.findOne({
                userName: message.author.username,
                guildName: message.guild.name,
            })
            if(!data) {
                data = await schema.create({
                    userName: message.author.username,
                    guildName: message.guild.name,
                })
            }
        } catch (e) {
            console.log(e)
        }
        
        message.channel.send(embed)
        data.AFK = true
        data.AFK_Reason = args.join(" ")
        await data.save()
    }
}