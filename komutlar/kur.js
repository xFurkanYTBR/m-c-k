const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "307454426384302082") {
        
        message.channel.send(':1234: **Darq* Botu için gerekli şeyler kuruluyor...**');
        
        message.guild.createChannel('darq-bot');
        
        message.channel.send(':white_check_mark: **Herşey Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'd!kur'
};