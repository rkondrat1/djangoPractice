from django import forms
from restaurants.models import Establishment, Deals, UserData

class EstablishmentForm(forms.Form):
    name = forms.CharField()
    address = forms.CharField()
    zipcode = forms.CharField()
    establishmentHours = forms.CharField()
    website = forms.URLField(required=False)

class DealsForm (forms.Form):
    ## HH Details
    dealStartTime = forms.TimeField()
    dealEndTime = forms.TimeField()
    dealDayofWeek = forms.CharField()
    dealType = forms.CharField()
    dealDetails = forms.CharField()

class UserDataForm(forms.Form):
    #UserData
    firstName = forms.CharField()
    lastName = forms.EmailField()
    userName = forms.CharField()
    password = forms.CharField()
    profilePicture = forms.ImageField(required=False)
    userLocation = forms.CharField(required=False)
    listofFavorites = forms.CharField(required=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        #Class EstablishmentForm
        #name
        self.fields['name'].required = True  # Make name required in backend
        #Add required attribute in html - needed in addition to backend 
        self.fields['name'].widget.attrs['required'] = True 
        #address
        self.fields['address'].required = True  # Make address required in backend
        self.fields['address'].widget.attrs['required'] = True 
        #zipcode
        self.fields['zipcode'].required = True  # Make zipcode required in backend
        self.fields['zipcode'].widget.attrs['required'] = True 
        #establishmentHours
        self.fields['establishmentHours'].required = True  # Make establishmentHours required in backend
        self.fields['establishmentHours'].widget.attrs['required'] = True 
        
        #Class DealsForm
        #dealStartTime
        self.fields['dealStartTime'].required = True  # Make dealStartTime required in backend
        #Add required attribute in html - needed in addition to backend 
        self.fields['dealStartTime'].widget.attrs['required'] = True 
        #dealEndTime
        self.fields['dealEndTime'].required = True  # Make dealEndTime required in backend
        self.fields['dealEndTime'].widget.attrs['required'] = True 
        #dealDayofWeek
        self.fields['dealDayofWeek'].required = True  # Make dealDayofWeek required in backend
        self.fields['dealDayofWeek'].widget.attrs['required'] = True 
        #dealType
        self.fields['dealType'].required = True  # Make dealType required in backend
        self.fields['dealType'].widget.attrs['required'] = True
        #dealDetails
        self.fields['dealDetails'].required = True  # Make dealDetails required in backend
        self.fields['dealDetails'].widget.attrs['required'] = True

        #Class UserDataForm
        #firstName
        self.fields['firstName'].required = True  # Make firstName required in backend
        #Add required attribute in html - needed in addition to backend 
        self.fields['firstName'].widget.attrs['required'] = True 
        #lastName
        self.fields['lastName'].required = True  # Make lastName required in backend
        self.fields['lastName'].widget.attrs['required'] = True 
        #userName
        self.fields['userName'].required = True  # Make userName required in backend
        self.fields['userName'].widget.attrs['required'] = True 
        #password
        self.fields['password'].required = True  # Make password required in backend
        self.fields['password'].widget.attrs['required'] = True 

