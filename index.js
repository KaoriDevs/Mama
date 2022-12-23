const aoijs = require("aoi.js")
const { Configuration, OpenAIApi } = require('openai');

const bot = new aoijs.Bot({
token: process.env['TOKEN'],
prefix: "!",
intents: "all"
})

bot.onMessage()

// Manipulador de Comandos
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./Comandos/")

// Eventos e Variáveis
bot.variables({
    vezentrou: 0,
    coratual: '',
}) 

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]
$log[$getBotInvite]`
})

const express = require('express')
const app = express()
app.get('/', function (req, res) {
 res.send('I am up!')
})
app.listen(3000)

bot.onInteractionCreate()
bot.onJoin()