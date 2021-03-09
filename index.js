const { prefix, token } = require("./security.json")
const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const chalk = require('chalk')
const { v4 } = require('uuid');

const client = new discord.Client()

client.once("ready", async () => {
  console.log(chalk.blueBright("Online!"), `Logged in as ${client.user.username} (${client.user.id})`)
})

client.on("message", async message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === "uuid") {
    message.author.send("Your UUID is: " + "`" + v4() + "`")
  } else if (command === "info") {
    const embed = new MessageEmbed()
    .setTitle("Bot Info")
    .setColor("#7289DA")
    .setAuthor("simplesentai#0321")
    .addField("Developer", "simplesentai#0321", true)
    .addField("Prefix", prefix, true)
    .addField("Commands:", ".uuid\n.info\n.meme\n.ping\n.bonk", true)
    message.channel.send(embed)
  } else if (command === "ping") {
    message.reply("pong")
  } else if (command === "bonk") {
    const embed = new MessageEmbed()
    .setColor("#7289DA")
    .setImage("https://github.com/SimpleSenpai12/Curiosity/blob/master/IMG_0771.jpg")
    message.channel.send(embed)
  }
})

client.login(token)