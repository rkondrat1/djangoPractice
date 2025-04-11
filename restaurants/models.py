from django.db import models

# Create your models here.

# Data about the Restaurnat - General
class Establishment(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    zipcode = models.CharField(max_length=5)
    establishmentHours = models.CharField(max_length=12)
    website = models.URLField()
  

# Data about the specific deal from the restaurant
class Deals(models.Model):
    ## HH Details
    dealStartTime = models.TimeField()
    dealEndTime = models.TimeField()
    dealDayofWeek = models.CharField(max_length=10)
    dealType = models.CharField(max_length=20)
    dealDetails = models.CharField(max_length=300)

# Data about the specific deal from the restaurant
class UserData(models.Model):
    ## HH Details
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    userName = models.CharField(max_length=15)
    password = models.CharField(max_length=30)
    profilePicture = models.ImageField()
    userLocation = models.CharField(max_length=5)
    listofFavorites = models.CharField(max_length=300)


    def __str__(self):
        return self.title