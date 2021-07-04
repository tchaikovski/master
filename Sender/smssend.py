import sys, argparse
from urllib.request import urlopen
from urllib.error import URLError
from urllib.parse import quote

import requests
from os import getenv

import requests


api_id = 'A20C16C6-F226-92E2-9943-ADBAD1FF4369'
phone = '79219054792'
message = 'Проверка из джанго', phone


# TODO: закончились лимиты - проверю хавтра

def main():
    url = 'https://sms.ru/sms/send?api_id={}&to={}&msg={}&json=1'.format(api_id, phone, message)
    # url = 'http://example.com/getJSON/ViewInfo'
    res = requests.post(url)
    print(res.text)




if __name__ == "__main__":
    main()
