
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login

def index(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('restaurants')  
        else:
            return render(request, 'restaurants/index.html', {
                'error': 'Invalid username or password'
            })
    return render(request, 'restaurants/index.html')