const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [g�n], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("M�Z�K KOMUTLARI:",`
d!�al:         ^Yazd���n�z �ark�y� �alar.^
d!kuyruk:      ^�ark� kuyru�unu g�sterir.^
d!devam:       ^Duraklat�lan �ark�ya devam eder.^
d!ge�:         ^�alan �ark�y� ge�er.^
d!dur:         ^�al�nan �ark�y� duraklat�r.^
d!�alan:       ^Mesaj� yazd���n�z anda hangi �ark�n�n �ald���n� g�sterir.^
d!duraklat:    ^Oynat�lan �ark�y� duraklat�r.^
d!ses:         ^Oynat�lan �ark�n�n ses seviyesini ayarlar.^
d!gir:         ^Bulundu�un kanala giri� yapar.^
d!ayr�l:       ^Bulundu�un kanaldan ��k�� yapar.^


* �rn: d!�al <�ark�ismi>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'm�zik',
  description: 'T�m komutlar� listeler. �sterseniz bir komut hakk�nda yard�m eder..',
  usage: 'm�zik'
};