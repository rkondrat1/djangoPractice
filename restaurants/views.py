from django.shortcuts import render
from django.http import HttpResponse

def restaurants(request):
    return HttpResponse("Hello world!")