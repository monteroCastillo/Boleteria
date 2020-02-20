from rest_framework import viewsets

#from djangorestframework_jwt

from .models import Publicador
from .serializer import PublicadorSerializer


class PublicadorViewSet(viewsets.ModelViewSet):
    queryset = Publicador.objects.all()
    serializer_class = PublicadorSerializer

# class PostsView(ListAPIView):
#   authentication_class = (JSONWebTokenAuthentication,) # Don't forget to add a 'comma' after first element to make it a tuple
#   permission_classes = (IsAuthenticated,)