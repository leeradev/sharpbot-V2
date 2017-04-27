exports.run = function (bot, msg, args) {

  msg.delete();
  if(msg.mentions.users.size === 0) {
      return msg.channel.sendMessage('`Mention a user!`');
    }
    let info = msg.mentions.users.first();
    if(!info) {
      return msg.channel.sendMessage('`Invalid user!`');
    }
    msg.channel.sendMessage(`**\`\`\`js
userInfo of: ${info.username}#${info.discriminator}
${require("util").inspect(info, { depth: 1 })}\`\`\`**`);
};

exports.info = {
    name: 'info',
    usage: 'info <@Mention>',
    description: 'gives detailed user info in text'
};
