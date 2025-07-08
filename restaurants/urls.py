from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='index'),
    path('add_deal/', views.add_deal_view, name='add_deal'),
]