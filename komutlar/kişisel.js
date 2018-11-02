const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("KULLANICI KOMUTLARI:",`
d!afk:         ^Afk moduna geçersiniz.^
d!bilgi:       ^Bot hakkında bilgiler alırsınız.^
d!davet:       ^Botun davet linkini gönderir.^
d!destek:      ^Botun destek sunucusunu yollar.^
d!geldim:      ^Afk modundan çıkmanızı sağlar.^
d!istatistik:  ^Botun istatistiklerini atar.^
d!kullanıcı:   ^Yazan kullanıcının hakkında bilgiler verir.^
d!ping:        ^Botun pingini gösterir.^
d!sunucu:      ^Sunucu hakkında bilgiler verir.^
d!hatabildir:  ^Botta bulunan bir hatayı göndermenizi sağlar.^
d!yardım:      ^Yardım komutlarını gösterir.^

* örn: d!afk <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kişisel'
};