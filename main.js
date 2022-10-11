const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  console.log("Recieved a new message -> " + msg.toString());
  msg.reply("Thank you for typing " + msg.content);
})

const myToken = process.env['BOT_TOKEN'];
client.login(myToken);