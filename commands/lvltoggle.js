const Discord = require('discord.js');
const schema = require('../database/schema/level-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `leveltoggle`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**You do not have the permissions to use this command.**');

        schema.findOne({ guildId: message.guild.id }, async (e, data) => {
            if (!data) {
                new schema({
                   guildId: message.guild.id,
                   toggle: 1, 
                }).save();
                return message.channel.send('Level System is now: **on**');
            };

            if(data.toggle == 1){
                data.toggle -=1;
                data.save();
                return message.channel.send('Level System is now: **off**');
            } else if (data.toggle == 0) {
                data.toggle +=1;
                data.save();
                return message.channel.send('Level System is now: **on**');
            }
        })
    }
}