from django.shortcuts import render,  get_object_or_404
from .models import Pages


def product_detail_single_page(request, slug):
    product = get_object_or_404(Pages, slug=slug, available=True)
    return render(request, 'pages/detail.html', {'product': product, 'slug': slug})

