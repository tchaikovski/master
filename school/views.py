from django.shortcuts import render, get_object_or_404
from django.utils.functional import empty

from .models import Category, Product
from cart.forms import CartAddProductForm
from django.forms.models import model_to_dict


def index(request):
    return render(request, 'index.html')


def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)

    return render(request, 'school/product/school_list.html', {'category': category, 'categories': categories, 'products': products})


def product_detail(request, category_slug, slug):
    product = get_object_or_404(Product, slug=slug, available=True)
    cart_product_form = CartAddProductForm()

    return render(request, 'school/product/detail.html', {'product': product, 'cart_product_form': cart_product_form, 'category_slug': category_slug})
