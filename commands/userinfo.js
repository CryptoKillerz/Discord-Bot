const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `userinfo`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if (!user) return message.reply('**I Cannot Find This User. Please Try Again**').then(msg => msg.delete({ timeout: 4000 }));

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${user.user.username} Info`, user.user.displayAvatarURL({ dynamic: true }))
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .setColor(message.guild.me.displayColor)
            .addFields(
                {
                    name: "Member Name",
                    value: `${user.user.username}`,
                    inline: true
                },
                {
                    name: "Member Tag",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "Member ID",
                    value: `${user.user.id}`,
                    inline: true
                },
                {
                    name: "Account Created",
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Member Joined Server',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Member Roles',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )
            .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp();

        await message.channel.send(embed).catch(error => console.log(error));
    }
}