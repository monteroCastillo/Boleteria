from rest_framework import routers

from .viewsets import PublicadorViewSet
from .viewsets import PublicadorViewSet2

router = routers.SimpleRouter()
router.register('Publi', PublicadorViewSet)
router.register('usuario', PublicadorViewSet2)

urlpatterns = router.urls