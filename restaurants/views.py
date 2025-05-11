
from django.http import HttpResponse
from django.views.generic import TemplateView

def login(request):
    return render(request, 'login.html')
  
def restaurants(request):
    return HttpResponse("Hello world!")
  
class IndexView(TemplateView):
    template_name = "restaurants/index.html"
