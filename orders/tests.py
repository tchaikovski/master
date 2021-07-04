from django.test import TestCase
import requests

# Create your tests here.
def telegs():
    requests.get('https://api.telegram.org/bot1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c/sendMessage?chat_id=-1001585724529&text=Печенек много не бывает!')
    # xxx = requests.get('https://api.telegram.org/bot1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c/sendMessage?chat_id=-1001585724529&text=Печенек много не бываетxxx!')


# if __name__ == "__main__":
#     telegs()


