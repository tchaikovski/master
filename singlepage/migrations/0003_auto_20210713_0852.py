# Generated by Django 3.1.7 on 2021-07-13 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('singlepage', '0002_pages_shablon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pages',
            name='shablon',
            field=models.CharField(choices=[('singlepage/singlepage.html', 'Base'), ('singlepage/singlepage1.html', 'School'), ('singlepage/singlepage2.html', 'Staff'), ('singlepage/kontakty.html', 'Quotes'), ('singlepage/about.html', 'Not name')], max_length=500),
        ),
    ]
