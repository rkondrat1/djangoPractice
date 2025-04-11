from django import forms
from .models import MapModel
    
class MapForm(forms.ModelForm):
    class Meta:
        model = MapModel
        fields = '__all__'