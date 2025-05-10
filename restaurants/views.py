from django.shortcuts import render
from django.http import HttpResponse

def restaurants(request):
    return HttpResponse("Hello world!")


def index(request):
    return render(request, 'restaurants/index.html')