const Discord = require("discord.js");
const CommandHandler = require("wokcommands");
const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION"],
});

const welcome = require("./welcome");

const config = require("./config.json");

client.on("ready", () => {
  console.log("Our Discord bot is online");

  new CommandHandler(client, { commandsDir: "commands" });
  welcome(client);
});

client.login(config.token);
