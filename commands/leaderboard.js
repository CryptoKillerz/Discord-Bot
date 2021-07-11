const Discord = require('discord.js');
const Levels = require('discord-xp');
const Client = require('../structures/Client');
module.exports = {
    name: `leaderboard`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

        if (rawLeaderboard.length < 1) return message.channel.send("**Nobody's in leaderboard yet.**");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.

        const embed = new Discord.MessageEmbed()
            .setColor('WHITE')
            .setTitle('LEADERBOARD')
            .setDescription(lb.join("\n\n"))

        message.channel.send(embed);
  }
}