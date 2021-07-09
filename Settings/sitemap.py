from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from pages.models import Category, Product, Kontakt
from school.models import Category as SchoolCategory
from school.models import Product as SchoolProduct


class KontaktViewSitemap(Sitemap):
    changefreq = "always"
    priority = 0.5

    def items(self):
        return Kontakt.objects.all()

    def lastmod(self, item):
        return item.updated


class ProductSchoolViewSitemap(Sitemap):
    changefreq = "always"
    priority = 0.5

    def items(self):
        return SchoolProduct.objects.all()

    def lastmod(self, item):
        return item.updated

class CategorySchoolViewSitemap(Sitemap):
    changefreq = "always"
    priority = 0.5

    def items(self):
        return SchoolCategory.objects.all()

    def lastmod(self, item):
        return item.updated



class ProductPageViewSitemap(Sitemap):
    changefreq = "always"
    priority = 0.5

    def items(self):
        return Product.objects.all()

    def lastmod(self, item):
        return item.updated


class CategoryPageViewSitemap(Sitemap):
    changefreq = "always"
    priority = 0.5

    def items(self):
        return Category.objects.all()

    def lastmod(self, item):
        return item.updated

