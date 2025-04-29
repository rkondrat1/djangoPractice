from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    # path('', views.login, name='login'),
   path('', views.index, name='index'),
   # path('map/', views.ViewsIndex, name='map'),
    # path('', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
]