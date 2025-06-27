from django import forms
from users.models import Profile

class LoginForm(forms.Form):
    #UserData
    userName = forms.CharField()
    password = forms.CharField()