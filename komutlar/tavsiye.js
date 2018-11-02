const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarý :warning:', '`tavsiye` adlý komutu özel mesajlarda kullanamazsýn.')
return message.author.sendEmbed(ozelmesajuyari); }
let guild = message.guild
let mesaj = args.slice(0).join(' ');
  message.delete();
  console.log("d!tavsiye komutu " + message.author.username + '#' + message.author.discriminator + " tarafýndan kullanýldý.")
  if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(':no_entry_sign: :pencil: Tavsiye için bana birþey yazman gerek!'));
  const tavsiye1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(':open_file_folder: Tavsiye Ýçin Teþekkürler!\n:page_facing_up: Lütfen gereksiz yere tavsiye vermeyiniz.')
  message.channel.send(tavsiye1);
const tavsiye = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .setDescription(':newspaper2: **' + message.author.tag + '** Adlý Kullanýcýnýn Tavsiyesi;')
  .addField(':envelope: Kullanýcý Bilgileri', '**» Kullanýcý ID: **' + message.author.id + '\n**» Kullanýcý Adý: **' + message.author.username + '#' + message.author.discriminator)
  .addField(':envelope: Sunucu Bilgileri', '**» Sunucu ID: **' + message.guild.id + '\n**» Sunucu Adý: **' + message.guild.name + '\n**» Sunucu Invite Link: **' + message.guild.channels.get(message.channel.id).createInvite())
  .addField(':pencil: Tavsiye','**' + mesaj + '**')
return client.channels.get("307454426384302082").send(tavsiye);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'Bota eklenmesini istediðiniz þeyi tavsiye etmenizi saðlar',
  usage: 'd!tavsiye [tavsiye]'
};