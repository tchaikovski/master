from django.contrib import admin
from .models import Cars


@admin.register(Cars)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_filter = ['available']
    # list_editable = ['available']
    prepopulated_fields = {'slug': ('name',)}

