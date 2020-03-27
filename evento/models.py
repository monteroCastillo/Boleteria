from django.db import models

# Create your models here.

class Evento(models.Model):
    idEvento = models.AutoField(primary_key=True)

    nombreEvento = models.CharField(max_length=100)

    precioEvento = models.IntegerField()

    ubicacionEvento = models.TextField()

    horaEvento = models.DateTimeField(auto_now=False, auto_now_add=False)

    fechaEvento = models.DateField(help_text='(AA/MM/DD)')

    

    class Restriccion(models.IntegerChoices):
        TODOS = 1
        MAYORES_DE_EDAD = 2
        MAYORES_DE_12_ANIOS = 3
        MAYORES_DE_15_ANIOS = 4

    restriccion = models.IntegerField(choices=Restriccion.choices)

    categoria  = models.CharField(max_length=100, null = True)

    descripcion = models.TextField(null= True)
   
    
   

    