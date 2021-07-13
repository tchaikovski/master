from django.db import models
from django.urls import reverse
from mptt.models import MPTTModel, TreeForeignKey

CATEGORY_CHOICES = [
    ('school/product/list.html', 'Base'),
    ('school/product/school_list.html', 'School'),
    ('school/product/staff_list.html', 'Staff'),
    ('school/product/list2.html', 'Quotes'),
    ('school/product/list3.html', 'Not name'),
]


class Category(MPTTModel):
    name = models.CharField(max_length=200, db_index=True)
    title = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True, null=True)
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField(blank=True)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children', db_index=True, on_delete=models.CASCADE)
    updated = models.DateTimeField(auto_now=True)


    class MPTTMeta:
        order_insertion_by = ['name']

    class Meta:
        ordering = ('name',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        unique_together = ('parent', 'slug',)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('pages:product_list_page_by_category', args=[self.slug])


class Pages(models.Model):
    category = TreeForeignKey('Category', null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    title = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True)
    content = models.TextField(blank=True)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('pages:product_detail_page', args=[self.category.slug, self.slug])

