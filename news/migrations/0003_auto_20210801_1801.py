# Generated by Django 3.1.7 on 2021-08-01 18:01

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_news_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True),
        ),
    ]
