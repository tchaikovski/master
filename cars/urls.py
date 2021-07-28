from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'cars'
urlpatterns = [
    path('', views.car_list_page, name='car_list_page'),
    path('<slug:slug>/', views.car_detail_page, name='car_detail_page'),


]
