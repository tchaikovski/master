from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from mptt.admin import DraggableMPTTAdmin
from .models import Category, Pages

admin.site.register(Category, DraggableMPTTAdmin )

@admin.register(Pages)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'slug', 'available', 'created', 'updated']
    list_filter = ['available', 'created', 'updated']
    list_editable = ['available', 'category']
    prepopulated_fields = {'slug': ('name',)}













#
# # @admin.register(Category)
# class CategoryAdmin(MPTTModelAdmin):
#     list_display = ['parent', 'name', 'slug']
#     list_display_links = ('name',)
#     ordering = ['parent']
#     prepopulated_fields = {'slug': ('name',)}
#     mptt_level_indent = 20
#     list_filter = ['name', 'title']
#
#     class MPTTMeta:
#         order_insertion_by = ['parent']
#
#
# # class CustomMPTTModelAdmin(MPTTModelAdmin):
# #     # specify pixel amount for this ModelAdmin only:
# #     mptt_level_indent = 20
# #     mptt_indent_field = "some_node_field"
#
#
# admin.site.register(Category, CategoryAdmin)
# admin.site.register(
#     Category,
#     DraggableMPTTAdmin,
#     list_display=(
#         'parent', 'name', 'slug'
#     ),
#     prepopulated_fields=(
#         {'slug': ('name',)}
#     ),
#     list_display_links=(
#         'name',
#     ),
# )

