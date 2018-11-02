const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyar� :warning:', '`tavsiye` adl� komutu �zel mesajlarda kullanamazs�n.')
return message.author.sendEmbed(ozelmesajuyari); }
let guild = message.guild
let mesaj = args.slice(0).join(' ');
  message.delete();
  console.log("d!tavsiye komutu " + message.author.username + '#' + message.author.discriminator + " taraf�ndan kullan�ld�.")
  if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(':no_entry_sign: :pencil: Tavsiye i�in bana bir�ey yazman gerek!'));
  const tavsiye1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(':open_file_folder: Tavsiye ��in Te�ekk�rler!\n:page_facing_up: L�tfen gereksiz yere tavsiye vermeyiniz.')
  message.channel.send(tavsiye1);
const tavsiye = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .setDescription(':newspaper2: **' + message.author.tag + '** Adl� Kullan�c�n�n Tavsiyesi;')
  .addField(':envelope: Kullan�c� Bilgileri', '**� Kullan�c� ID: **' + message.author.id + '\n**� Kullan�c� Ad�: **' + message.author.username + '#' + message.author.discriminator)
  .addField(':envelope: Sunucu Bilgileri', '**� Sunucu ID: **' + message.guild.id + '\n**� Sunucu Ad�: **' + message.guild.name + '\n**� Sunucu Invite Link: **' + message.guild.channels.get(message.channel.id).createInvite())
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
  description: 'Bota eklenmesini istedi�iniz �eyi tavsiye etmenizi sa�lar',
  usage: 'd!tavsiye [tavsiye]'
};