# from celery import task
from django.core.mail import send_mail
from .models import Order
from Sender.config import api_id, phone
from orders.tests import telegs
import requests


def telegs():
    requests.get('https://api.telegram.org/bot1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c/sendMessage?chat_id=-1001585724529&text=Печенек много не бывает!')


# if __name__ == "__main__":
#     telegs()




# @task
def order_created(order_id):
    """
    Task to send an e-mail notification when an order is
    successfully created.
    """
    order = Order.objects.get(id=order_id)
    subject = 'Order nr. {}'.format(order.id)
    message = 'Dear {},\n\nYou have successfully placed an order. Your order id is {}.'.format(order.first_name, order.id)
    mail_sent = send_mail(subject, message, 'tchaikovski@mail.ru', [order.email])
    return mail_sent
