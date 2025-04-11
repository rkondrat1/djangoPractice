from django.db import models
from mapbox_location_field.models import LocationField

    
class MapModel(models.Model):
    location = LocationField()

def __str__(self):
    return self.title