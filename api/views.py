from django.shortcuts import render
from rest_framework import generics
from .serializers import PostSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Post
# Create your views here.
class BlogViewSet(viewsets.ModelViewSet):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    permission_classes=(IsAuthenticated,)
def homepage(request):
    return render(request,"index.html")