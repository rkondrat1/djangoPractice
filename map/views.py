from django.shortcuts import render
from .forms import MapForm

def map_view(request):
    if request.method == 'POST':
        form = MapForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = MapForm()
    return render(request, 'map.html', {'form': form})