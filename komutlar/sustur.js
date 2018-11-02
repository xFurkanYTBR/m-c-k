const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyar�** :warning:', '`sustur` **adl� komutu �zel mesajlarda kullanamazs�n.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'darq-bot');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muteli');
  if (!modlog) return message.reply('`darq-bot` **kanalini bulamiyorum. ** __**Kanal� Otomatik Kurmak ��in d!kur u Kullan!**__').catch(console.error);
  if (!muteRole) return message.reply('`Muteli` **adl� bir rol bulam�yorum.**').catch(console.error);
  if (reason.length < 1) return message.reply(' **Susturma sebebini Yazmad�n!** ').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply(' **Kimi susturaca��n� Belirtmedin!** ').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
	.addField('Sunucun Ad�:', message.guild.name)
    .addField('Eylem:', 'Susturma ')
    .addField('Susturulan Kullan�c�:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Susturan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Susturma Sebebi', reason)
    .setFooter('Darq* | dbot.rf.gd', client.user.avatarURL);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip de�ilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: '�stedi�iniz ki�iyi susturur.',
  usage: 'sustur [kullan�c�] [sebep]'
};
