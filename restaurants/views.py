
from django.http import HttpResponse
from django.views.generic import TemplateView

def restaurants(request):
    return HttpResponse("Hello world!")


class IndexView(TemplateView):
    template_name = "restaurants/index.html"