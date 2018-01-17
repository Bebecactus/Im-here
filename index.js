const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login('MzgwNzE3MDkyMDk5MzI1OTUy.DUAEPw.gmiMtMm45ceZUCB5fOtvGseNG88');
