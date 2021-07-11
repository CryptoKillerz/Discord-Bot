const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `react`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You do not have the permissions to ban someone.**');

        const channelID = message.mentions.channels.first();
        if(!channelID) return message.reply("**Please specify a valid channel you want the embed to be sent in!**\n `Example: e!reactionrole #<channel> <Your Description>`")

        const desc = args.slice(1).join(" ")
        if(!desc) return message.reply("**Please add a valid description!**\n `Example: e!reactionrole #<channel> <Your Description>`")


        const Role1 = message.guild.roles.cache.find(role => role.name === "The Traveller")
        const Role2 = message.guild.roles.cache.find(role => role.name === "Muted")

        const emoji1 = '👍';
        const emoji2 = '👎';


        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Title")
        .setDescription(desc)

        let msgembed = await channelID.send(embed)
        await msgembed.react(emoji1)
        await msgembed.react(emoji2)

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Role1)
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Role2)
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Role1)
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Role2)
                }
            } else {
                return;
            }
        });
    }
}