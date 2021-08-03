from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from mptt.admin import DraggableMPTTAdmin
from .models import Pages, Slide, Content


@admin.register(Pages)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'available', 'created', 'updated', 'shablon']
    list_filter = ['available', 'created', 'updated']
    list_editable = ['available']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Slide)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Content)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name']
