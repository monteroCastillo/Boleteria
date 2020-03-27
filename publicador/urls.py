from rest_framework import routers

from .viewsets import PublicadorViewSet


router = routers.SimpleRouter()
router.register('Publi', PublicadorViewSet)

urlpatterns = router.urls