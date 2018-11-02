const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence komutları")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** d!ascii = Yazdığınız yazıyı asciiya dönüştürür.\n**•** d!atla = Atlama gifi atar. \n**•** d!avatarım = Avatarınızı Gösterir. \n**•** d!ortaparmak = Orta Parmak Gifi Atar. \n**•** d!kullanıcıbilgi = Sizin Hakkınızda Bilgi Verir! \n**•** d!sunucubilgi = Sunucu Hakkında Bilgi VErir \n**•** d!sunucuresmi = BOT Sunucu Resmini AtaR \n**•** d!yaz = Bota İstediğinizi Yazdırırsınız \n**•** d!yumruh-at = Yumruh Atarsınız. :- \n**•** d!çayaşekerat = Çaya Şeker Atarsınız. \n**•** d!çekiç = İstediğiniz Kişiye Çekic Atarsınız! \n**•** d!koş = Koşarsın RUN! \n**•** d!herkesebendençay = Herkese Çay Ismarlarsınız!-ŞakireYOK- \n**•** d!youtube = Bot Sahibinin Youtube Kanalını Atar. \n**•** d!windows = Windows 10 Gifi Atar! \n**•** d!banned = Dene Ve Gör! \n**•** d!muzum = Muzunu Ölçer! \n**•** d!havadurumu = Yazdgıınız Şehirin Hava Durmuunu ATAR! \n**•** d!mcbasari = Minecraft Başarı Biçinimde Yazar. \n**•** d!coolresim = Cool resim gösterir.\n**•** d!jdi = Jdi resmi atar.\n**•** d!mesajdöndür = Yazdığınız mesajı döndürür.\n**•** d!emojiyazı = Yazdığınız yazıyı emojili hale çevirip atar.\n**•** d!eski = Resminizi eskileştirir.\n**•** d!gif = Rastgele gif atar.\n**•** d!tkm = Taş,kağıt,makas oyununu oynarsınız.\n**•** d!starwars = Starwars filmini izlersiniz.')
      .setFooter('Örnek kullanım: d!ascii <yazı>')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence [komut]'
};