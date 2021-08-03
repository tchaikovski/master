from django.shortcuts import render, get_object_or_404
from django.views.generic.detail import SingleObjectMixin

from .models import Pages, Slide, Content
from cars.models import Cars
from school.models import Category as SchoolCategory

from django.views.generic import TemplateView, ListView, DetailView, FormView, CreateView


def product_detail_single_page(request, slug):
    product = get_object_or_404(Pages, slug=slug, available=True)
    cars = Cars.objects.all()
    templat = product.shablon

    return render(request, templat, {'product': product, 'slug': slug, 'cars': cars})


class HomePage(ListView):
    model = Slide
    template_name = 'index.html'
    context_object_name = 'homepage'

    @staticmethod
    def all_settings():
        return Content.objects.all()

    def school_cat(self):
        return SchoolCategory.objects.all()

