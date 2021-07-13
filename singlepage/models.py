from django.db import models
from django.urls import reverse


CATEGORY_CHOICES = [
    ('singlepage/singlepage.html', 'Base'),
    ('singlepage/singlepage1.html', 'School'),
    ('singlepage/singlepage2.html', 'Staff'),
    ('singlepage/kontakty.html', 'Quotes'),
    ('singlepage/about.html', 'Not name'),
]


class Pages(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    title = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True)
    content = models.TextField(blank=True)
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
        return reverse('pages:product_detail_page', args=[self.slug])
