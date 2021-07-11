const Discord = require('discord.js');
const fetch = require('node-fetch');
const Client = require('../structures/Client');
module.exports = {
    name: `topinvite`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const invites = await message.guild.fetchInvites();
        const topTen = invites.filter((inv) => inv.uses > 0).sort((a, b) => b.uses - a.uses).first(10);
        if (topTen.length === 0) return message.channel.send("**There are no invites, or none of them have been used!**");
        return message.channel.send(
          topTen.map((inv) => `**${inv.inviter.username}**'s invite **${inv.code}** has **${inv.uses.toLocaleString()}** uses.`)
        );
    }
}