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

			> Tas,kaðýt,makas komutu eklendi. _kullanmak icin \`d!tkm\`_
			> StarWars komutu eklendi. _kullanmak icin \`d!starwars\`_
			> Sustur komutu eklendi. _kullanmak icin \`d!sustur\`_
			> SusturAc komutu eklendi. _kullanmak icin \`d!susturaç\`_
		    > Rol-Ver komutu eklendi. _kullanmak icin \`d!rol-ver\`_
			> Yapýmcý Komutueklendi. _kullanmak icin \`d!yapýmcý\`_
			> Yardýmýn Yeni görünümü eklendi. _kullanmak icin \`d!yardým\`_
			> Ascii komutu eklendi. _kullanmak icin \`d!ascii\`_
			> Afk Ve Geldim Komutu eklendi. _kullanmak icin \`d!afk - d!geldim\`_
			> Rol-Ver komutu eklendi._kullanmak icin \`d!rol-ver\`_
			> Sunucudaki roller gösterir _kullanmak icin \`d!roller\`_
			> Destek Sunucusnda Oda Açar Ve ekibe yazarsýn! _kullanmak icin \`d!talep\`_
			> Skywars komutu eklendi. _kullanmak icin \`d!skywars\`_
			> Reklam-Tara Komutu eklendi. _kullanmak icin \`d!reklamtara\`_
			> SOR Bota Soru Sorarsýnýz Komutu Eklendi. _kullanmak icin \`d!sor\`_
			> Söv Komutu Eklendi. _kullanmak icin \`d!söv\`_
			> Küfür Engelleyici Eklendi. _kullanmak icin \`d!küfürengelleyici\`_

			Komutlari gormek icin \`d!yardim\`
			`)
			.setColor('GREEN');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Surum 1.0.1**

			> Tas,kaðýt,makas komutu eklendi. _kullanmak icin \`d!tkm\`_
			> StarWars komutu eklendi. _kullanmak icin \`d!starwars\`_
			> Sustur komutu eklendi. _kullanmak icin \`d!sustur\`_
			> SusturAc komutu eklendi. _kullanmak icin \`d!susturaç\`_
		    > Rol-Ver komutu eklendi. _kullanmak icin \`d!rol-ver\`_
			> Yapýmcý Komutueklendi. _kullanmak icin \`d!yapýmcý\`_
			> Yardýmýn Yeni görünümü eklendi. _kullanmak icin \`d!yardým\`_
			> Ascii komutu eklendi. _kullanmak icin \`d!ascii\`_
			> Afk Ve Geldim Komutu eklendi. _kullanmak icin \`d!afk - d!geldim\`_
			> Rol-Ver komutu eklendi._kullanmak icin \`d!rol-ver\`_
			> Sunucudaki roller gösterir _kullanmak icin \`d!roller\`_
			> Destek Sunucusnda Oda Açar Ve ekibe yazarsýn! _kullanmak icin \`d!talep\`_
			> Skywars komutu eklendi. _kullanmak icin \`d!skywars\`_
			> Reklam-Tara Komutu eklendi. _kullanmak icin \`d!reklamtara\`_
			> SOR Bota Soru Sorarsýnýz Komutu Eklendi. _kullanmak icin \`d!sor\`_
			> Söv Komutu Eklendi. _kullanmak icin \`d!söv\`_
			> Küfür Engelleyici Eklendi. _kullanmak icin \`d!küfürengelleyici\`_

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