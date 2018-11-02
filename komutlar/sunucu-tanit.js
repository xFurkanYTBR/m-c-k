const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  var channel = client.channels.find('id', '472713423365341184')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Sunucu Tanit")
  .setDescription("**Sunucun Tanýtýldý » https://discord.gg/3JykMtM**")
  .setFooter("Sunucu Tanýtýldý")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Sunucu Tanit")
  .addField('**» Tanitan: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adý: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanit',
  description: '',
  usage: 'sunucutanit'
};