const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("YETKİLİ KOMUTLARI:",`
d!ban:         ^Belirlediğiniz bir kullanıcıyı sunucudan kalıcı olarak atarsınız.^
d!sustur:      ^Banladıgınız Kişinin Banını Açarsınız^
d!uyar:        ^Seçdiğiniz Kişiyi Uyarır ^
d!kick:        ^İstediginiz Kişiyi Snuucudan Atarsın!^
d!kur:         ^Bot için gerekli odaları kurar.^
d!sustur:      ^İstediginiz Kişiyi Susturur!^
d!susturac:    ^Susturdugunuz Kişiyi Susmasını Açarsınız^
d!duyuru:      ^Güzel Bir Duyuru Şekli Yapar^
d!oylama:      ^Standart bir oylama yapmanızı sağlar.^
d!reboot:      ^Botu yeniden yapmanızı sağlar.^
d!sunucular:   ^Botun bulunduğu sunucuları gösterir.^
d!tavsiye:     ^Bot'a tavsiye yollamanızı sağlar.^
d!yaz:         ^Bot üzerinden yazı yazmanızı sağlar.^
d!kilit:       ^Kanalı belirli bir süre kilitlemenizi sağlar.^

* örn: d!ban <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};