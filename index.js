const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,  // Allows the bot to receive information about guilds (servers) it is a member of.
    GatewayIntentBits.GuildMessages, // Allows the bot to receive messages sent in guilds.
    GatewayIntentBits.MessageContent, // Allows the bot to receive message content along with message events.
  ],
});

client.on("messageCreate", (message) => {
  console.log(message.author.username);
  //console.log(message.content.includes('Hi'));
  if (message.author.bot) return; // This code snippet is used so that bot doesn't reply to his own messages

  if (message.content.includes("Hi")) {
    message.reply({
      content: "Hi From <Your bot name> !",
    });
  }

  if (!message.content.includes("Hi") && message.author.username.includes('<Your bot name>')) {
    
  //  This code snippet demonstrates a simple JavaScript program that generates a random number and 
  //  uses a switch statement to provide different responses based on the generated number.

  //   const a = Math.floor(Math.random() * 10);
  //   switch (a) {
  //     case 0:
  //       message.reply({
  //         content: message.content + "<Your message>",
  //       });
  //       break;
      
  //     case n:
  //       message.reply({
  //          //  block of code to be executed
  //       });
  //       break;

  //     default:
  //       message.reply({
  //         //  block of code to be executed
  //       });
  //       break;
  //   }
  // }
  
  //   This code snippet demonstrates the use of a conditional statement in JavaScript. 
  //   Conditional statements are used to execute different blocks of code based on different conditions. 

  //   if (message.content) {
  //     //  block of code to be executed if condition1 is true
  //   } else if (condition2) {
  //     //  block of code to be executed if the condition1 is false and condition2 is true
  //   } else {
  //     //  block of code to be executed if the condition1 is false and condition2 is false
 }
});

client.login(
  "< Your bot key >"
);
