# Generated by Django 3.1.7 on 2021-04-09 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20210402_2118'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='lol',
            field=models.DurationField(null=True),
        ),
    ]
