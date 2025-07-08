from django import forms
from restaurants.models import Profile

class EstablishmentDataForm(forms.Form):
    #Establishment Data
    name = forms.CharField()
    address = forms.CharField()
    zipcode = forms.CharField()
    establishment_hours = forms.CharField()
    website = forms.CharField()
    location = forms.CharField()

class DealsDataForm(forms.Form):
    deal_start_time = forms.CharField()
    deal_end_time = forms.CharField()
    deal_day_of_week = forms.CharField()
    deal_type = forms.CharField()
    deal_details = forms.CharField()
    location = forms.CharField()