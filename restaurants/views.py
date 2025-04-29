from django.shortcuts import render
from django.http import HttpResponse

def login(request):
    # return HttpResponse("Hello, world! This is the home page.")
    return render(request, 'login.html')

def index(request):
    return render(request, 'index.html')