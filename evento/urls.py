from rest_framework import routers

from .viewsets import EventoViewSet

router = routers.SimpleRouter()
router.register('evento', EventoViewSet)

urlpatterns = router.urls