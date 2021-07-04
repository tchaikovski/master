# Done! Congratulations on your new bot. You will find it at t.me/UgraAvtoBot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.
#
# Use this token to access the HTTP API:
# 1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c
# Keep your token secure and store it safely, it can be used by anyone to control your bot.
#   channel_id = "@UgraAvtoBot"
# For a description of the Bot API, see this page: https://core.telegram.org/bots/api
#


channel_id = '@UgraAvtoBot'
offset = 0 # параметр необходим для подтверждения обновления
URL = 'https://api.telegram.org/bot' # URL на который отправляется запрос
TOKEN = '1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c'  # заменить на токен своего бота

# {"ok":true,"result":[{"update_id":496130461,
# "channel_post":{"message_id":6,"author_signature":"Vladimir Tchaikovsky","sender_chat":{"id":-1001585724529,"title":"Ugraavto","username":"ugraavto","type":"channel"},"chat":{"id":-1001585724529,"title":"Ugraavto","username":"ugraavto","type":"channel"},"date":1625389321,"text":"/start","entities":[{"offset":0,"length":6,"type":"bot_command"}]}},{"update_id":496130462,
# "message":{"message_id":10,"from":{"id":27993741,"is_bot":false,"first_name":"Vladimir","last_name":"Tchaikovsky","username":"vptchaikovsky","language_code":"ru"},"chat":{"id":27993741,"first_name":"Vladimir","last_name":"Tchaikovsky","username":"vptchaikovsky","type":"private"},"date":1625389328,"text":"/start","entities":[{"offset":0,"length":6,"type":"bot_command"}]}}]}

# https://api.telegram.org/bot1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c/sendMessage?chat_id=-1001585724529&text=Печенек много не бывает!

import urllib.request
import requests
requests.get('https://api.telegram.org/bot1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c/sendMessage?chat_id=-1001585724529&text=Печенек много не бывает!')
