from django.db import models
from mapbox_location_field.models import LocationField

# Create your models here.

# Data about the Restaurnat - General
class Establishment(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    zipcode = models.CharField(max_length=5)
    establishment_hours = models.CharField(max_length=12)
    website = models.CharField(max_length=300)
    #location = LocationField(default=[0.0, 0.0])
    location = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name  
# Data about the specific deal from the restaurant
class Deals(models.Model):
    ## HH Details
    deal_start_time = models.CharField(max_length=7)
    deal_end_time = models.CharField(max_length=7)
    deal_day_of_week = models.CharField(max_length=10)
    deal_type = models.CharField(max_length=20)
    deal_details = models.CharField(max_length=300)
    #Deal relation to restaurant
    #establishment = models.ForeignKey(Establishment, on_delete=models.CASCADE, related_name='Deals', default=1)

    def __str__(self):
        return f"{self.deal_type} on {self.deal_day_of_week}"