
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.contrib.auth import authenticate, login as auth_login
from .models import Establishment
from .models import Deals

def index(request):
    all_deals = Deals.objects.all()
    deal_start_time = sorted(set(all_deals)) 
    deal_end_time = sorted(set(all_deals)) 
    deal_day_of_week = sorted(set(all_deals)) 
    deal_type = sorted(set(all_deals)) 
    establishment_info = Establishment.objects.all()
    location = sorted(set(establishment_info))

    return render(request, 'restaurants/index.html', {
        'deal_start_time': deal_start_time,
        'deal_end_time': deal_end_time,
        'deal_day_of_week': deal_day_of_week,
        'deal_type': deal_type,
        'location' : location,
    })
    
def add_deal_view(request):
    if request.method == 'POST':
        name = request.POST.get("location")
        establishment_info = request.POST.get("establishment_info")
        location = request.POST.get("location")
        deal_start_time = request.POST.get("deal_start_time")
        deal_end_time = request.POST.get("deal_end_time")
        deal_day_of_week = request.POST.get("deal_day_of_week")
        deal_type = request.POST.get("deal_type")
        deal_details = request.POST.get("deal_details")
        
    return render(request, 'restaurants/add_deal.html')