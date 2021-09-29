from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register(r'post',BlogViewSet,basename='blog')
urlpatterns = [path('', homepage, name="homepage_view"),]+router.urls