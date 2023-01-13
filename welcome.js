module.exports = (client) => {
    const channelId = "958373295495983157";
    // const rulesChannel = "812460469016199248";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${member.id}> to our server! Just Dive Into Our World.}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };