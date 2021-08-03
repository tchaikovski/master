from django.contrib import admin
from .models import News


# Register your models here.

@admin.register(News)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    list_filter = ['available']
    # list_editable = ['available']
    prepopulated_fields = {'slug': ('name',)}
