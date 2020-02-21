from .models import Publicador
from rest_framework import serializers

class PublicadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicador
        fields = '__all__'
        # model = Publicador
        # fields = ('usuario','clave') 