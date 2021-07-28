from django.shortcuts import render, get_object_or_404
from .models import Cars


# Create your views here.


def car_list_page(request):
    products = Cars.objects.filter(available=True)

    return render(request, 'cars/carlist.html', {'products': products})


def car_detail_page(request, slug):
    category = None
    product = get_object_or_404(Cars, slug=slug, available=True)
    return render(request, 'cars/detail.html', {'product': product, 'slug': slug})
