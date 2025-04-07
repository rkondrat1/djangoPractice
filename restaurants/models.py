from django.db import models

# Create your models here.

class Establishment(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    zipcode = models.CharField(max_length=5)
    establishmentHours = models.CharField(max_length=12)
    website = models.URLField()
    ## HH Details
    happyHourStartTime = models.TimeField()
    happyHourEndTime = models.TimeField()
    happyHourDayofWeek = models.CharField()

    def __str__(self):
        return self.title