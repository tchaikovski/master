from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from mptt.admin import DraggableMPTTAdmin
from .models import Pages


@admin.register(Pages)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'available', 'created', 'updated']
    list_filter = ['available', 'created', 'updated']
    list_editable = ['available']
    prepopulated_fields = {'slug': ('name',)}

