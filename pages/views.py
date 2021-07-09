from django.shortcuts import render, get_object_or_404
from .models import Category, Product, Kontakt
from school.models import Category as SchoolCategory
from school.models import Product as SchoolProduct


def contact(request, slug):
    product = get_object_or_404(Kontakt, slug=slug, available=True)
    return render(request, 'pages/contact.html', {'product': product})


def product_list_page(request, category_slug=None):
    category = None
    categoriesshop = SchoolCategory.objects.all()
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    return render(request, 'pages/list.html', {'category': category, 'categories': categories, 'categoriesshop': categoriesshop, 'products': products})


def product_detail_page(request, category_slug, slug):
    product = get_object_or_404(Product, slug=slug, available=True)
    return render(request, 'pages/detail.html', {'product': product, 'category_slug': category_slug})
