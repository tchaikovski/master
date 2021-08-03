from django.urls import path
from django.views.generic import TemplateView

from .views import NewsDetailView, NewsListView

app_name = 'news'
urlpatterns = [
    # path('', views.car_list_page, name='car_list_page'),
    path('', NewsListView.as_view(), name='news_list'),
    path('<slug:slug>/', NewsDetailView.as_view(), name='news'),

]
