from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from Settings.sitemap import CategoryPageViewSitemap, ProductPageViewSitemap, ProductSchoolViewSitemap, CategorySchoolViewSitemap, KontaktViewSitemap

sitemaps = {
    'schoolcategory': KontaktViewSitemap,
    'schoolproduct': ProductSchoolViewSitemap,
    'pagecategory': CategoryPageViewSitemap,
    'pageproduct': ProductPageViewSitemap,
}


urlpatterns = [
    path('admin/', admin.site.urls),
    path('cart/', include('cart.urls', namespace='cart')),
    path('orders/', include('orders.urls', namespace='orders')),
    path('coupons/', include('coupons.urls', namespace='coupons')),
    path('courses/', include('school.urls', namespace='school')),
    path('', include('pages.urls', namespace='pages')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
