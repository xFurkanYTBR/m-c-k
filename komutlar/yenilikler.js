const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

const { stripUndents } = require("common-tags")
exports.run = (client, message) => {
                    if (message.guild) {
			var embed = new Discord.RichEmbed()
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Surum 1.0.1**

			> Tas,ka��t,makas komutu eklendi. _kullanmak icin \`d!tkm\`_
			> StarWars komutu eklendi. _kullanmak icin \`d!starwars\`_
			> Sustur komutu eklendi. _kullanmak icin \`d!sustur\`_
			> SusturAc komutu eklendi. _kullanmak icin \`d!sustura�\`_
		    > Rol-Ver komutu eklendi. _kullanmak icin \`d!rol-ver\`_
			> Yap�mc� Komutueklendi. _kullanmak icin \`d!yap�mc�\`_
			> Yard�m�n Yeni g�r�n�m� eklendi. _kullanmak icin \`d!yard�m\`_
			> Ascii komutu eklendi. _kullanmak icin \`d!ascii\`_
			> Afk Ve Geldim Komutu eklendi. _kullanmak icin \`d!afk - d!geldim\`_
			> Rol-Ver komutu eklendi._kullanmak icin \`d!rol-ver\`_
			> Sunucudaki roller g�sterir _kullanmak icin \`d!roller\`_
			> Destek Sunucusnda Oda A�ar Ve ekibe yazars�n! _kullanmak icin \`d!talep\`_
			> Skywars komutu eklendi. _kullanmak icin \`d!skywars\`_
			> Reklam-Tara Komutu eklendi. _kullanmak icin \`d!reklamtara\`_
			> SOR Bota Soru Sorars�n�z Komutu Eklendi. _kullanmak icin \`d!sor\`_
			> S�v Komutu Eklendi. _kullanmak icin \`d!s�v\`_
			> K�f�r Engelleyici Eklendi. _kullanmak icin \`d!k�f�rengelleyici\`_

			Komutlari gormek icin \`d!yardim\`
			`)
			.setColor('GREEN');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Surum 1.0.1**

			> Tas,ka��t,makas komutu eklendi. _kullanmak icin \`d!tkm\`_
			> StarWars komutu eklendi. _kullanmak icin \`d!starwars\`_
			> Sustur komutu eklendi. _kullanmak icin \`d!sustur\`_
			> SusturAc komutu eklendi. _kullanmak icin \`d!sustura�\`_
		    > Rol-Ver komutu eklendi. _kullanmak icin \`d!rol-ver\`_
			> Yap�mc� Komutueklendi. _kullanmak icin \`d!yap�mc�\`_
			> Yard�m�n Yeni g�r�n�m� eklendi. _kullanmak icin \`d!yard�m\`_
			> Ascii komutu eklendi. _kullanmak icin \`d!ascii\`_
			> Afk Ve Geldim Komutu eklendi. _kullanmak icin \`d!afk - d!geldim\`_
			> Rol-Ver komutu eklendi._kullanmak icin \`d!rol-ver\`_
			> Sunucudaki roller g�sterir _kullanmak icin \`d!roller\`_
			> Destek Sunucusnda Oda A�ar Ve ekibe yazars�n! _kullanmak icin \`d!talep\`_
			> Skywars komutu eklendi. _kullanmak icin \`d!skywars\`_
			> Reklam-Tara Komutu eklendi. _kullanmak icin \`d!reklamtara\`_
			> SOR Bota Soru Sorars�n�z Komutu Eklendi. _kullanmak icin \`d!sor\`_
			> S�v Komutu Eklendi. _kullanmak icin \`d!s�v\`_
			> K�f�r Engelleyici Eklendi. _kullanmak icin \`d!k�f�rengelleyici\`_

			Komutlari gormek icin \`d!yardim\`
			`)
		.setColor('GREEN');

		return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};