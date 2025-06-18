
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from .models import Establishment
from .models import Deals

def index(request):
    all_deals = Deals.objects.all()
    deal_start_time = sorted(set(all_deals)) 
    deal_end_time = sorted(set(all_deals)) 
    deal_day_of_week = sorted(set(all_deals)) 
    deal_type = sorted(set(all_deals)) 

    return render(request, 'restaurants/index.html', {
        'deal_start_time': deal_start_time,
        'deal_end_time': deal_end_time,
        'deal_day_of_week': deal_day_of_week,
        'deal_type': deal_type,
    })