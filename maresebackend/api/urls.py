from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from . import views

router = routers.DefaultRouter()
router.register('videos', views.VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/users/deactivate/<str:pk>',
         views.UserDeactivate.as_view(), name='deactivate')
]
