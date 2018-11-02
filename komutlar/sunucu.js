const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  var konum = ''
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Bat� Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'G�ney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Do�u Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Bat� Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'G�ney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Do�u Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
	   message.delete();

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.tag)
    const sunucubilgi = new Discord.RichEmbed()
    .addField(':warning: Uyar� :warning:', '`sunucubilgi` adl� komutu �zel mesajlarda kullanamazs�n.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL || message.guild.iconURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('Darq* | dbot.rf.gd', client.user.avatarURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Ad:', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('B�lge ', konum)
    .addField('�ye say�s� :', message.guild.memberCount)
    .addField('Sahibi :', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal say�s� :', message.guild.channels.size)
    .addField('Sunucu olu�turma tarihi:', moment(message.guild.createdAt).format('DD/MM/YYYY'), true)
    .addField("� Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=465478012142485509&scope=bot&permissions=805314622)` + "**\n**"+`[DBL Oyver](https://discordapp.com/oauth2/authorize?client_id=465478012142485509&scope=bot&permissions=805314622)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/3JykMtM)`, false);
    console.log("d!sunucubilgi komutu " + message.author.username + '#' + message.author.discriminator + " taraf�ndan kullan�ld�.")
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Sunucu hakk�nda bilgi verir.',
  usage: 'd!sunucu'
};