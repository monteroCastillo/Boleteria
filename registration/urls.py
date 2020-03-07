from django.urls import path
from .views import homeTemplate


urlpatterns = [
    path('index/',homeTemplate,name='home')
    ]