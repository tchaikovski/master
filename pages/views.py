from django.shortcuts import render, get_object_or_404
from django.views.generic import DetailView, ListView
from mptt.forms import TreeNodeChoiceField
from .models import Category, Pages
from school.models import Category as SchoolCategory
from school.models import Product as SchoolProduct


def index(request):
    return render(request, 'index.html')


def product_list_page(request, category_slug=None):
    category = None
    categoryschool = SchoolCategory.objects.all()
    categories = Category.objects.all()
    # categories = TreeNodeChoiceField(queryset=Category.objects.all())
    products = Pages.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    return render(request, 'pages/list.html', {'category': category, 'categories': categories, 'categoryschool': categoryschool, 'products': products})


def product_detail_page(request, slug, category_slug=None):
    category = None
    product = get_object_or_404(Pages, slug=slug, available=True)
    return render(request, 'pages/detail.html', {'product': product, 'slug': slug, 'category_slug': category_slug})

#
#
#
# def product_list(request, category_slug=None):
#     category = None
#     categories = Category.objects.all()
#     products = Product.objects.filter(available=True)
#     if category_slug:
#         category = get_object_or_404(Category, slug=category_slug)
#         products = products.filter(category=category)
#     # print(qs)
#     # print(list_result[0])
#     result = Category.objects.values()
#     list_result = [entry for entry in result]
#     print(list_result)
#     # print(list_result[0]['shablon'])
#
#     # obj = Category.objects.get(pk=category.pk)
#
#
#     # if Category.objects.get(shablon=category.shablon).shablon is empty:
#     #     manual_template = 'school/product/school_list.html'
#     # else:
#     #     manual_template = Category.objects.get(shablon=category.shablon).shablon
#     # print(obj.pk)  # Получил PK  категории
#     try:
#         manual_template = Category.objects.get(shablon=category.shablon).shablon
#     except:
#         manual_template = 'school/product/list.html'
#     print(manual_template)  # Получил PK  категории
#
#
#
#     # manual_template = 'school/product/school_list.html'
#     # print(manual_template)
#     # return render(request, manual_template, {'category': category, 'categories': categories, 'products': products})
#     return render(request, 'school/product/school_list.html', {'category': category, 'categories': categories, 'products': products})
# #
#
# def product_detail(request, category_slug, slug):
#
#     product = get_object_or_404(Product, slug=slug, available=True)
#     cart_product_form = CartAddProductForm()
#
#     print(product.category.pk)   #   1
#     cat_id = product.category.pk
#     manual_template = Category.objects.get(id=cat_id).shablon
#
#     # manual_template = Category.objects.values()
#     # manual_template = Category.objects.get(product.category)
#     print(manual_template)
#     # print(manual_template[0]['shablon'])
#     page_temp = 'school/product/detail.html'
#
#     if manual_template == 'school/product/staff_list.html':
#         page_temp = 'school/product/detail.html'
#     else:
#         page_temp = 'school/product/detail_school.html'
#     return render(request, page_temp, {'product': product, 'cart_product_form': cart_product_form, 'category_slug': category_slug})
#     # return render(request, 'school/product/detail.html', {'product': product, 'cart_product_form': cart_product_form, 'category_slug': category_slug})
