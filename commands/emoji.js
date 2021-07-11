const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `emoji`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        let Emojis="";
        let EmojisAnimated="";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
          return client.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji => {
          OverallEmojis++;
          if(emoji.animated){
            Animated++;
            EmojisAnimated+=Emoji(emoji.id)
          }else{
            EmojiCount++;
            Emojis+=Emoji(emoji.id)
          }
        })
        let emojiEmbed = new Discord.MessageEmbed()
          .setTitle(`Emojis from ${message.guild.name}.`)
          .setDescription(`**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`)
    
          message.channel.send(emojiEmbed);
    }
}