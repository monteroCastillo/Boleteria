from django.db import models

# Create your models here.
class Publicador(models.Model):
    nombre_Razonsocial = models.CharField(max_length=100)
 
    nitCedula = models.IntegerField()
 
    usuario = models.CharField(max_length=100)

    clave = models.CharField(max_length=100)    
 
    correoElectronico = models.EmailField(max_length=30, default="")
 
    numeroTelefonico = models.CharField(max_length=20, default="")
 
    id = models.IntegerField(primary_key=True)