# Generated by Django 3.1.7 on 2021-07-26 18:37

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0021_product_content_tr'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_tr',
            field=models.ImageField(blank=True, upload_to='products/%Y/%m/%d', verbose_name='Изображение для страницы ниже'),
        ),
        migrations.AlterField(
            model_name='product',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Описание страницы'),
        ),
        migrations.AlterField(
            model_name='product',
            name='content_tr',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Требования'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, upload_to='products/%Y/%m/%d', verbose_name='Изображение для курса'),
        ),
    ]
