const Discord = require('discord.js');
const prefixSchema = require('../database/schema/prefix-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `setprefix`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**You can not use this command.**');

        const data = await prefixSchema.findOne({
            GuildName: message.guild.name 
        });
    
        if (!args[0]) return message.channel.send('**You must provide a new prefix**!');
    
        if (args[0].length > 5) return message.channel.send('**Your new prefix must be under \`5\` characters!**')
    
        if (data) {
            await prefixSchema.findOneAndRemove({
                GuildName: message.guild.name
            })
            
            message.channel.send(`**The new prefix is now \`${args[0]}\`**`);
    
            let newData = new prefixSchema({
                Prefix: args[0],
                GuildName: message.guild.name
            })
            newData.save();
        } else if (!data) {
            message.channel.send(`**The new prefix is now \`${args[0]}\`**`);
    
            let newData = new prefixSchema({
                Prefix: args[0],
                GuildName: message.guild.name
            })
            newData.save();
        }
    }
}