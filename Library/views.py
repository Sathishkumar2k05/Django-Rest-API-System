from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from .models import *
from .serializers import *

class BookView(ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = Book_Serializer 

class LaptopView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Laptops.objects.filter(brand = 'Lenovo')
    
    def perform_create(self, serializer):
        
        serializer.save(user_type = 'High Performance')

    queryset = Laptops.objects.all()
    serializer_class = Laptop_Serializer

class LaptopViewById(generics.RetrieveUpdateDestroyAPIView):

    def perform_update(self, serializer):

        serializer.save(user_type = 'Low Performance')

    queryset = Laptops.objects.all()
    serializer_class = Laptop_Serializer