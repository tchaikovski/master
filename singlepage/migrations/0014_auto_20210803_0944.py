# Generated by Django 3.1.7 on 2021-08-03 09:44

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('singlepage', '0013_auto_20210803_0933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True),
        ),
    ]
