# Generated by Django 3.1.7 on 2021-04-10 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_store_lol'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='ahmed',
            field=models.FileField(null=True, upload_to='hi'),
        ),
    ]
