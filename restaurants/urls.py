from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('restaurants/', views.restaurants, name='restaurants'),
]