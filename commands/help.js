const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `help`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async (client, message, args) => {
        const sectionEmbed = new Discord.MessageEmbed()
            .setTitle('Bot Help Sections')
            .setDescription('Use e!help sectionName to access another section.\nSections:\nfun\nmoderation\ntool\ninvite\neconomy\nmedia\nlevel\ngamble\npremium\nnsfw')
            .addField('Fun Commands', 'Commands that all users can use that are for fun and have no purpose.')
            .addField('Invite Commands', 'Command for users to invite the bot to their server.')
            .addField('Moderation commands', 'Commands that are for moderation purposes within a server.')
            .addField('Tool commands', 'Commands that add features to a server.')
            .addField('Economy commands', 'Commands like bal or work.')
            .addField('Media commands', 'Commands for stats on the corona virus.')
            .addField('Level commands', 'Commands for level or leaderboard.')
            .addField('Gamble Commands', 'Commands for gambling.')
            .addField('Premium Commands', 'Commands coming soon.')
            .addField('NSFW Commands', 'Commands for dirty minded people!')
            .setFooter(client.user.tag, client.user.displayAvatarURL());

        const funEmbed = new Discord.MessageEmbed()
            .setTitle('Fun Commands.')
            .addField('Ping Command', 'Sends the bot ping.')
            .addField('Say Command', 'Make the bot say a message to the channel.')
            .addField('Avatar Command', 'Sends the members avatar.')
            .addField('Rps Command', 'ROCK, PAPER, SCISSORS, SHOT.')
            .addField('Meme Command', 'Sends a meme.')
            .addField('8ball Command', 'Sends the answer of your question.')
            .addField('Rate Command', 'The bot rates you 1 out of a 100.')
            .addField('Hug Command', 'Hug that member if you want...')
            .addField('DM Command', 'DMs a specific member in a server')
            .addField('Calculator Command', 'Use the calculator for math problems.');

        const moderationEmbed = new Discord.MessageEmbed()
            .setTitle('Moderation Commands.')
            .addField('Ban Command', 'Bans a member from the server')
            .addField('Kick Command', 'Kicks a member from the server')
            .addField('Purge Command', 'Purges messages within a channel')
            .addField('Unban Command', 'Unbans a member from the server')
            .addField('Ticket Command', 'Creates a private support channel.')
            .addField('Slowmode Command', 'Sets a slowmode to a channel.')
            .addField('Lock Channel Command', 'Locks the channel.')
            .addField('Unlock Channel Command', 'Unlocks the channel.')
            .addField('Warn Command', 'Warns a member.')
            .addField('React Command', 'Create reactions.')
            .addField('UserInfo Command', 'Checks info about that member.')
            .addField('Level Toggle Command', 'Able to turn off and on the leveling system.');

        const toolEmbed = new Discord.MessageEmbed()
            .setTitle('Tool Commands.')
            .addField('Help Commands', 'This commands shows the user all the commands possable.')
            .addField('Server Info Command', 'Sends the information about the server.')
            .addField('Poll Command', 'Creates a poll!')
            .addField('Sourcebin Command', 'Put your code in a sourcebin!')
            .addField('Vote Command', 'This is a vote system.')
            .addField('Suggestion Command', 'This is a vote system.')
            .addField('Bot Info Command', 'Sends info about the bot.')
            .addField('Weather Command', 'Sends the weather of your city or state')
            .addField('Emoji Command', 'Sends the list of all the emojis in the server');

        const InviteEmbed = new Discord.MessageEmbed()
            .setTitle('Invite Commands.')
            .addField('Invite Command', 'Sends the link for them to invite your bot to their server.');

        const EconomyEmbed = new Discord.MessageEmbed()
            .setTitle('Economy Commands.')
            .addField('Deposit Command', 'Deposit your money into your bank.')
            .addField('Beg Command', 'STOP, begging for money.')
            .addField('Balance Command', 'Check your balance every once and a while.')
            .addField('Withdraw Command', 'Withdraw your money into your wallet.');

        const MediaEmbed = new Discord.MessageEmbed()
            .setTitle('Media Commands.')
            .addField('Corona Command', 'Checks the status about covid-19.')

        const LevelEmbed = new Discord.MessageEmbed()
            .setTitle('Level Commands.')
            .addField('Level Command', 'Checks your level.')
            .addField('Leaderboard Command', 'Checks the leaderboard for the top 10 users.')
        
        const GambleEmbed = new Discord.MessageEmbed()
            .setTitle('Gamble Commands.')
            .addField('Coinflip Command', 'Coinflip to get some extra cash!')

        const premiumEmbed = new Discord.MessageEmbed()
            .setTitle('Premium Commands.')
            .addField('Give Command', 'Premium user only command!')
            .addField('Remove Command', 'Premium user only command!')
            .addField('MORE COMING SOON!', '...');

        const nsfwEmbed = new Discord.MessageEmbed()
            .setTitle('NSFW Commands.')
            .addField('Yuri Command', '...')
            .addField('Hentai Command', '...')
            .addField('Neko Command', '...')
            .addField('Gif Command', '...')
            .addField('Boobs Command', '...')
            .addField('Ass Command', '...')
            .addField('4K Command', '...')
            .addField('Pussy Command', '...')
            .addField('Kitsune Command', '...')
            .addField('Holo Command', '...')
            .addField('Pwank Command', '...')



        if (!args[0]) return message.channel.send(sectionEmbed);
        if (args[0] == 'fun') return message.channel.send(funEmbed);
        else if (args[0] == 'tool') return message.channel.send(toolEmbed);
        else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
        else if (args[0] == 'invite') return message.channel.send(InviteEmbed);
        else if (args[0] == 'economy') return message.channel.send(EconomyEmbed);
        else if (args[0] == 'media') return message.channel.send(MediaEmbed);
        else if (args[0] == 'level') return message.channel.send(LevelEmbed);
        else if (args[0] == 'gamble') return message.channel.send(GambleEmbed);
        else if (args[0] == 'premium') return message.channel.send(premiumEmbed);
        else if (args[0] == 'nsfw') return message.channel.send(nsfwEmbed);
    }
}



