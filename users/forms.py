from django import forms
from users.models import Profile

class UserDataForm(forms.Form):
    #UserData
    firstName = forms.CharField()
    lastName = forms.EmailField()
    userName = forms.CharField()
    password = forms.CharField()
    profilePicture = forms.ImageField(required=False)
    userLocation = forms.ChoiceField(required=False)
    listofFavorites = forms.CharField(required=False)