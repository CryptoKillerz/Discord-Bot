const Discord = require('discord.js');
const premiumSchema = require('../database/schema/premium');
const Client = require('../structures/Client');
module.exports = {
    name: `add-premium`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if(message.author.id !== '791757304797331466') return;

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!member) return message.channel.send('**Please state a member that is in the server!**');

        premiumSchema.findOne(
            {
            User: member.id
            },
            async(err, data) => {
                if (data) 
                return message.channel.send(
                    "**This user has already gained premium features!**"
                );

            new premiumSchema({
                User: member.id
            }).save();
                return message.channel.send(`**Added ${member} to the premium list!**`);
        })
    }
}