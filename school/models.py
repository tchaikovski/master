from django.db import models
from django.urls import reverse
from PIL import Image
from ckeditor_uploader.fields import RichTextUploadingField

# CATEGORY_CHOICES = [
#     ('school/product/list.html', 'Base'),
#     ('school/product/school_list.html', 'School'),
#     ('school/product/staff_list.html', 'Staff'),
#     ('school/product/list2.html', 'Quotes'),
#     ('school/product/list3.html', 'Not name'),
# ]


class Category(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    title = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True, null=True)
    slug = models.SlugField(max_length=200, unique=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True, verbose_name='Изображение для Категории на главной')
    content = models.TextField(blank=True)
    updated = models.DateTimeField(auto_now=True)

    # shablon = models.CharField(max_length=500, choices=CATEGORY_CHOICES)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('school:product_list_by_category', args=[self.slug])


class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True, verbose_name='Изображение для курса')
    image_tr = models.ImageField(upload_to='products/%Y/%m/%d', blank=True, verbose_name='Изображение для страницы ниже')
    title = models.CharField(max_length=170, blank=True, null=True)
    time = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True)
    content = RichTextUploadingField(blank=True, verbose_name='Описание страницы')
    content_tr = RichTextUploadingField(blank=True, verbose_name='Требования')
    # content = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=0)
    price_sale = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def save(self):
        super().save()  # saving image first

        img = Image.open(self.image.path)  # Open image using self

        if img.height > 360 or img.width > 600:
            new_img = (600, 360)
            img.thumbnail(new_img)
            img.save(self.image.path)  # saving image at the same path

    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('school:product_detail', args=[self.category.slug, self.slug])
#
#
# class Shablon(models.Model):
#     name = models.CharField(max_length=250)
#     attr = models.CharField(max_length=250)
#     urltemplate = models.CharField(max_length=550)
#
#     class Meta:
#         ordering = ('name',)
#         verbose_name = 'Шаблон'
#         verbose_name_plural = 'Шаблоны'
#
#     def __str__(self):
#         return self.attr
#
#     def get_absolute_url(self):
#         return reverse('school:product_list_by_category', args=[self.name, self.attr, self.urltemplate])
