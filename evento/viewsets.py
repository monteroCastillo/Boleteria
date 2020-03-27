from rest_framework import viewsets

from .models import Evento
from .serializer import EventoSerializer

class EventoViewSet(viewsets.ModelViewSet):
	queryset = Evento.objects.all()
	serializer_class = EventoSerializer