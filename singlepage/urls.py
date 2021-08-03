from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import HomePage


app_name = 'singlepage'
urlpatterns = [
    # path('', views.home_page, name='home_page'),
    path('', HomePage.as_view(), name='news_list'),
    # path('<slug:slug>/', NewsDetailView.as_view(), name='news'),

    path('<slug:slug>/', views.product_detail_single_page, name='product_detail_page_single'),
    # path('<slug:slug>/', views.contact, name='page'),
    # path('<slug:category_slug>/', views.product_list_page, name='product_list_page_by_category'),
    # path('<slug:category_slug>/<slug:slug>/', views.product_detail_page, name='product_detail_page'),
    # path('', views.product_list_page, name='product_list_page'),
    # path('kontacty/', TemplateView.as_view(template_name='pages/pagesingle.html'), name='kontakt'),
    # вот тут даже класса во views.py не создаётся, а сразу напрямую отправляемся в шаблон (работает потому что импортирована функция вверху).


]
