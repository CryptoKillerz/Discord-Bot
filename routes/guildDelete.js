const guildConfigSchema = require('../database/schema/guildConfigSchema');
module.exports = async (guild) => {
    await guildConfigSchema.deleteOne({ guildID: guild.id });
}