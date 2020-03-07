from django.shortcuts import render

# Create your views here.

def homeTemplate(request):
    return render(request,'registration/home.html')
