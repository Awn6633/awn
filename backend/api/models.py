from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class TestManger(models.Manager):
    def create_test(self, name, last_name):
        if not name:
            test = self.create(name="lol", last_name=last_name)
            return test
        test = self.create(name=name, last_name=last_name)
        return test


class Test(models.Model):
    name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=60)
    objects = TestManger()

    def clean(self):
        if self.name == "mo":
            raise ValidationError(_("Lol You cant take this name"))
