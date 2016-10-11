"""FudanSE URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from travelMap import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.index),
    url(r'^signup$', views.signup),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^setting$', views.setting),
    url(r'^visit$', views.visit),
    url(r'^upload$', views.upload),
    url(r'^follow$', views.follow),
    url(r'^unfollow$', views.unfollow),
    url(r'^(?P<username>[0-9A-Za-z]+)$', views.user),
    url(r'^(?P<username>[0-9A-Za-z]+)/(?P<cityName>[A-Za-z-]+)$', views.city),
    url(r'^(?P<username>[0-9A-Za-z]+)/(?P<cityName>[A-Za-z-]+)/(?P<pictureId>\d+)$', views.picture),
    url(r'^(?P<username>[0-9A-Za-z]+)/followers$', views.followers),
    url(r'^(?P<username>[0-9A-Za-z]+)/following$', views.following),
]
