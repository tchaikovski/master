# Generated by Django 3.1.7 on 2021-08-03 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('singlepage', '0014_auto_20210803_0944'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='content',
            options={'ordering': ('name',), 'verbose_name': 'Настройки главной страницы', 'verbose_name_plural': 'Настройки главной страницы'},
        ),
        migrations.AddField(
            model_name='content',
            name='descriptions',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='content',
            name='title',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
