const guildConfigSchema = require('../database/schema/guildConfigSchema');

const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `unban`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
      //Permissions Checking:
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**You do not have the permissions to ban someone.**');

    //Variables:
    let reason = args.slice(1).join(" ");
    let userID = args[0];

    //Input Checking:
    if (!reason) reasson: 'No reason given.';
    if (!args[0]) return message.channel.send('**You must state someone to unban.** \`e!unban @user reason\`');
    if (isNaN(args[0])) return message.channel.send('**The ID stated is not a number.** \`e!unban ID reason\`');

    const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

    const logchannel = message.guild.channels.cache.get(Log.logChannelID);

    if (!logchannel) return;

    //Executing:
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send('**This server does not have anyone unbanned.**');
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send('**The user ID stated is not banned**');
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('**Something went wrong trying to unban the member.**')
      }).then(() => {
        logchannel.send(`**Successfully Unbanned ${args[0]}**`);
      });
    });
    }
}