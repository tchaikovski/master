from django.db import models

# Create your models here.
from django.urls import reverse

TRANSMISSION = [
    ('Автоматическая', 'Автоматическая'),
    ('Механическая', 'Механическая'),
]






class Cars(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='cars/%Y/%m/%d', blank=True)
    title = models.CharField(max_length=170, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True)
    year = models.CharField(max_length=200, blank=True, verbose_name='Год')
    gos = models.CharField(max_length=200, blank=True, verbose_name='Гос Номер')
    car_model = models.CharField(max_length=200, blank=True, verbose_name='Модель машины')
    transmission = models.CharField(max_length=500, choices=TRANSMISSION, blank=True)
    available = models.BooleanField(default=True)


    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
        verbose_name = 'Автомобиль'
        verbose_name_plural = 'Автомобили'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('cars:cars_page', args=[self.slug])

