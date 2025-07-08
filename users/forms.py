from django import forms
from users.models import Profile

class LoginForm(forms.Form):
    #UserData
    user_name = forms.CharField()
    password = forms.CharField()

class SignUpForm(forms.Form):
    #UserData
    user_name = forms.CharField()
    phone_number = forms.CharField()
    email = forms.CharField()
    password = forms.CharField()

