const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("MÜZÝK KOMUTLARI:",`
d!çal:         ^Yazdýðýnýz þarkýyý çalar.^
d!kuyruk:      ^Þarký kuyruðunu gösterir.^
d!devam:       ^Duraklatýlan þarkýya devam eder.^
d!geç:         ^Çalan þarkýyý geçer.^
d!dur:         ^Çalýnan þarkýyý duraklatýr.^
d!çalan:       ^Mesajý yazdýðýnýz anda hangi þarkýnýn çaldýðýný gösterir.^
d!duraklat:    ^Oynatýlan þarkýyý duraklatýr.^
d!ses:         ^Oynatýlan þarkýnýn ses seviyesini ayarlar.^
d!gir:         ^Bulunduðun kanala giriþ yapar.^
d!ayrýl:       ^Bulunduðun kanaldan çýkýþ yapar.^


* örn: d!çal <þarkýismi>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutlarý listeler. Ýsterseniz bir komut hakkýnda yardým eder..',
  usage: 'müzik'
};