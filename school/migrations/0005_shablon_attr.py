# Generated by Django 3.1.7 on 2021-07-11 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0004_shablon'),
    ]

    operations = [
        migrations.AddField(
            model_name='shablon',
            name='attr',
            field=models.CharField(default=1, max_length=250),
            preserve_default=False,
        ),
    ]