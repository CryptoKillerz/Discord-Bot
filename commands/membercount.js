const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `membercount`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const onlineCount = msg.guild.members.filter(m => m.presence.status === 'online');
        return await msg.send(`${msg.guild.name} / ${msg.guild.id}` +
        `\n\nTotal guild members:    ${msg.guild.memberCount} members\n` +
        `Online guild members:   ${onlineCount.size} members\n` +
        `Offline guild members:  ${msg.guild.memberCount - onlineCount.size} members`, { code: 'xl' })
        .catch(err => console.log(err, 'error'));
    }
}