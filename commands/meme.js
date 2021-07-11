const Discord = require('discord.js');
const fetch = require('node-fetch');
const Client = require('../structures/Client');
module.exports = {
    name: `meme`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(async json => {
          const memeEmbed = new Discord.MessageEmbed()
            .setTitle(json.title)
            .setImage(json.url)
            .setFooter(`Link: ${json.subreddit} | Subreddit: ${json.postLink}`)
    
          let msg = await message.channel.send('**Fetching you a meme...**');
          msg.edit(memeEmbed);
        });
    },
    timeout: 10000
}