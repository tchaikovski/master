# Generated by Django 3.1.7 on 2021-07-20 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0014_remove_category_shablon'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='time',
            field=models.CharField(blank=True, max_length=170, null=True),
        ),
    ]