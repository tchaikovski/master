from django.db import models
from django.urls import reverse
from ckeditor_uploader.fields import RichTextUploadingField

CATEGORY_CHOICES = [
    ('singlepage/singlepage.html', 'All'),
    ('singlepage/page-files.html', 'Files'),
    ('singlepage/maps.html', 'MapsYandex'),
    ('singlepage/kontakty.html', 'Contakt'),
    ('singlepage/about.html', 'About'),
]


class Pages(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    title = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True)
    content = RichTextUploadingField(blank=True)
    code = models.TextField(blank=True)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    shablon = models.CharField(max_length=500, choices=CATEGORY_CHOICES)

    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('singlepage:product_detail_page_single', args=[self.slug])


class Slide(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    url = models.CharField(max_length=200, blank=True, default='#')
    image = models.ImageField(upload_to='slide/', blank=True)
    description = models.CharField(max_length=300, blank=True)
    content = models.TextField(blank=True)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Content(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200, blank=True)
    descriptions = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to='home/', blank=True)
    name_block = models.CharField(max_length=200, blank=True, default=True)
    content = RichTextUploadingField(blank=True)
    name_prime_block = models.CharField(max_length=200, blank=True)
    name_second_block = models.CharField(max_length=200, blank=True)
    url_prime_block = models.CharField(max_length=200, default='#')
    url_second_block = models.CharField(max_length=200, default='#')
    content_prime_block = models.TextField(blank=True)
    content_second_block = models.TextField(blank=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Настройки главной страницы'
        verbose_name_plural = 'Настройки главной страницы'

    def __str__(self):
        return self.name
