const Discord = require('discord.js');
const Levels = require('discord-xp');
const Client = require('../structures/Client');

module.exports = {
    name: `level`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const target = message.mentions.users.first() || message.author; // Grab the target.

        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

        const  neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.channel.send("**Seems like this user has not earned any xp so far.**"); // If there isnt such user in the database, we send a message in general.

        const lvlEmbed = new Discord.MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
          .setColor('RANDOM')
          .setDescription(`⚬ **Level**: ${user.level}\n⚬ **XP**: ${user.xp}`)
          .setFooter('Stay active and send messages to gain xp!')
        message.channel.send(lvlEmbed);
  }
}