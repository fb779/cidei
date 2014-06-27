from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cidei.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'app.views.index', name='index'),
    url(r'^items/$', 'app.views.items', name='items'),
    url(r'^items/(?P<itm_id>\d+)/$', 'app.views.itemDetails', name='details-item'),
    url(r'^item/add/$', 'app.views.add_item', name='add-items'), ##url para agregar los formularios
    url(r'^categorias/$', 'app.views.categorias', name='categorys'),
    #url(r'^categorias/(?P<cate_id>\d+)/$', 'app.views.categoryDetails', name='details-categorias'),
    url(r'^categorias/(?P<slug>[\w-]+)/$', 'app.views.categoryDetails', name='details-categorias'),
    url(r'^about/$', 'app.views.about', name='about'),
)
