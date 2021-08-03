from django.shortcuts import render
from .models import News


from django.views.generic import TemplateView, ListView, DetailView


class NewsDetailView(DetailView):
    model = News
    context_object_name = 'news'
    template_name = 'news/news_detail.html'


class NewsListView(ListView):
    model = News
    context_object_name = 'news'
    template_name = 'news/news_list.html'
    paginate_by = 10




#
# class News(TemplateView):
#     template_name = 'news/news_detail.html'  # 'template_name' is predefined
#
#     def get_context_data(self, *args, **kwargs):
#         context = {  # user defined name 'context'
#             'name': 'name',
#         }
#         return context
