# Generated by Django 3.1.7 on 2021-08-02 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('singlepage', '0010_auto_20210802_1954'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='content',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='content',
            name='name_block',
            field=models.CharField(blank=True, default=True, max_length=200),
        ),
    ]
