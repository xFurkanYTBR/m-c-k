const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapýmýcýsý:** <@307454426384302082>")
  .setFooter('Darq* | dbot.rf.gd', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=465478012142485509&scope=bot&permissions=805314622)` + "**\n**"+`[DBL Oyver](https://discordapp.com/oauth2/authorize?client_id=465478012142485509&scope=bot&permissions=805314622)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/e2Tp7fA)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=465478012142485509&scope=bot&permissions=805314622')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapýmcý',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'yapýmcý'
};
