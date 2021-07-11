const Discord = require('discord.js');
const weather = require('weather-js');
const Client = require('../structures/Client');
module.exports = {
    name: `weather`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        weather.find({
            search: args.join(" "),
            degreeType: 'F'
          }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (error) return message.channel.send(error);
            if (!args[0]) return message.channel.send('Please specify a location')
      
            if (result === undefined || result.length === 0) return message.channel.send('**Invalid location**');
      
            var current = result[0].current;
            var location = result[0].location;
      
            const weatherEmbed = new Discord.MessageEmbed()
              .setDescription(`**${current.skytext}**`)
              .setAuthor(`Weather forecast for ${current.observationpoint}`)
              .setThumbnail(current.imageUrl)
              .setColor(0x111111)
              .addField('Timezone', `EST${location.timezone}`, true)
              .addField('Degree Type', 'Farneheit', true)
              .addField('Temperature', `${current.temperature}°`, true)
              .addField('Wind', current.winddisplay, true)
              .addField('Feels like', `${current.feelslike}°`, true)
              .addField('Humidity', `${current.humidity}%`, true)
              .setFooter(message.author.tag, message.author.displayAvatarURL())
      
      
            message.delete();
            message.channel.send(weatherEmbed)
          })
    }
}