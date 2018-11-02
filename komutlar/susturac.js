module.exports.run = async (client, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (":x:  Yetkin yok!")
    }})
    
                let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
                if(!susturulacak) return msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (":x: Bir ki�iyi susturduysan ve bunu kald�rmak istiyorsan �ncelikle o ki�iyi etiketlemelisin.")
    }})
    
                let role = msg.guild.roles.find(r => r.name === "susturulmu�");
    
              if(!role || !susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (":x: Bu kullan�c� zaten cezal� de�il.")
    }});
    
              susturulacak.removeRole(role);
              msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: ("Cezas� ba�ar�yla kalkt�.")
    }})
          }
          
          
          
     exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: ['unmute'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'susturac',
      description: '�stedi�iniz ki�inin e�er susturulduysa susturunu a�ar.',
      usage: 'susturac'
    };