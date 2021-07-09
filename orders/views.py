import datetime

from django.shortcuts import render
from .models import OrderItem
from .forms import OrderCreateForm
from cart.cart import Cart
# from .tasks import order_created  # Cellery
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import get_object_or_404
from .models import Order
from django.conf import settings
from django.http import HttpResponse
from django.template.loader import render_to_string
import weasyprint
import requests


@staff_member_required
def admin_order_pdf(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    html = render_to_string('orders/order/pdf.html', {'order': order})
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'filename="order_{}.pdf"'.format(order.id)
    weasyprint.HTML(string=html).write_pdf(response, stylesheets=[weasyprint.CSS(settings.STATIC_ROOT + 'css/pdf.css')])
    return response


@staff_member_required
def admin_order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    return render(request, 'orders/order/detail.html', {'order': order})


def order_create(request):
    cart = Cart(request)
    if request.method == 'POST':
        form = OrderCreateForm(request.POST)
        if form.is_valid():
            # order = form.save()
            order = form.save(commit=False)
            if cart.coupon:
                order.coupon = cart.coupon
                order.discount = cart.coupon.discount
            order.save()

            for item in cart:
                OrderItem.objects.create(order=order, product=item['product'], price=item['price'], quantity=item['quantity'])
            # очистить корзину
            cart.clear()
            # Cellery
            # order_created.delay(order.id)
            # Cellery
            # print(item['product'])
            # cerated = order.created.strftime("%d.%m.%Y %H:%M:%S")
            # print(cerated)
            # print(order.id, order.last_name, order.first_name, order.phone)
            message = '{} оформлен заказ № - {} на курс обучения {} от {} {} телефон {}'.format(
                order.created.strftime("%d.%m.%Y %H:%M:%S"), order.id, item['product'], order.first_name, order.last_name, order.phone)

            # TODO: настроить передачу переменных в телеграм
            requests.get('https://api.telegram.org/bot1839564984:AAEVzMw5xGAtYNlltFi8z-4LgE6eUeFO-8c/sendMessage?chat_id=-1001585724529&text={}'.format(message))
            return render(request, 'orders/order/created.html', {'order': order, 'product': item['product'], 'price': item['price'], 'quantity': item['quantity']})
    else:
        form = OrderCreateForm()
    return render(request, 'orders/order/create.html', {'cart': cart, 'form': form})
