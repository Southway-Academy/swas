const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzgxNTMyMjQ0MTQ5OTI3OTY3.X7_Anw.3ma2a-FEH7GvQ6YdWDPQGz61vyA';
const prefix = '!';

bot.on('ready', () =>{;
    console.log('Southway Academy Bot Start-up completed');
    bot.user.setActivity('Watching Southway Academy', { type: 'WATCHING' })
})

bot.on("message", message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if(command === 'ping') {
        message.channel.send('Pong!');
    }

    if(command === 'staffbriefing') {        

        if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.send('<@&775161578797400064>')
        const user = message.mentions.users.first() || message.author ;
        const StaffBriefing = new Discord.MessageEmbed()
        .setColor('#1EACB0')
        .setTitle('STAFF BRIEFING')
        .setDescription('a')
        .addField('Link', `a ${args} a`)
        .addField('Host', user) 
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/770997487074672680/781917552254648320/Southway_Academy.png')
        .setFooter('Made by smplxzmaxr')
    try {
        message.channel.send(StaffBriefing);
    } catch {
        message.reply(`Sorry, but this command doesn't work right now, ask the Headteacher to fix it.`)
    }
    }
        
    } else
    if (command === 'ban') {

        if (message.member.hasPermission('ADMINISTRATOR')) {
        const userBan = message.mentions.users.first();

        if (userBan) {
            var member = message.guild.member(userBan);

            if (member) {
                member.ban({
                    reason: 'You have been banned from Southway Academy due to breaking our rules, this may be a permament ban.'
            }).then(() => {
                message.reply(`${userBan.tag} has been succesfully been banned from ${sever.name}!`);
            })
        } else {
            message.reply('Unfortunately, I cannot ban that person since they are not in the server!');
             }
        } else {
            message.reply('You need to state a user in order to ban from the server!')
             }
        } else {
        message.reply('You do not have permission to use this command!')
          }

    } else
    if (command === 'kick') {

        if (message.member.hasPermission('ADMINISTRATOR')) {
        const userKick = message.mentions.users.first();

        if (userKick) {
            var member = message.guild.member(userKick);

            if (member) {
                member.kick({
                    reason: 'You have been kicked from Southway Academy due to breaking our rules, you can join back when you will agree to follow our rules.'
                }).then(() => {
                    message.reply(`${userKick.tag} has been succesfully been kicked from the server.`);
                })
            } else {
                message.reply('Unfortunately, I was not able to kick the user since he is not in the server!')
            }
        } else {
             message.reply('You need to state the person in order to kick them from the server!')
        }
    } else {
        message.reply('You do not have permission to use this command!')
          }
    }
})

bot.login(token);