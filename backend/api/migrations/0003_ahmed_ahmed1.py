# Generated by Django 3.1.7 on 2021-03-25 15:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210322_2335'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ahmed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('last', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Ahmed1',
            fields=[
                ('ahmed_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.ahmed')),
                ('frist', models.BooleanField(default=False)),
                ('mid', models.BooleanField(default=False)),
            ],
            bases=('api.ahmed',),
        ),
    ]
