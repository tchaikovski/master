# Generated by Django 3.1.7 on 2021-07-26 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('singlepage', '0005_auto_20210721_1909'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pages',
            name='shablon',
            field=models.CharField(choices=[('singlepage/singlepage.html', 'All'), ('singlepage/singlepage1.html', 'NotWork'), ('singlepage/singlepage2.html', 'NotWork2'), ('singlepage/contact.html', 'Contakt'), ('singlepage/about.html', 'About')], max_length=500),
        ),
    ]
