from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from pages.models import Category, Pages
from school.models import Category as SchoolCategory
from school.models import Product as SchoolProduct
from singlepage.models import Pages as SinglePages


class SinglePagesViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return SinglePages.objects.all()

    def lastmod(self, item):
        return item.updated


class ProductSchoolViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return SchoolProduct.objects.all()

    def lastmod(self, item):
        return item.updated


class CategorySchoolViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return SchoolCategory.objects.all()

    def lastmod(self, item):
        return item.updated


class ProductPageViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return Pages.objects.all()

    def lastmod(self, item):
        return item.updated


class CategoryPageViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return Category.objects.all()

    def lastmod(self, item):
        return item.updated
