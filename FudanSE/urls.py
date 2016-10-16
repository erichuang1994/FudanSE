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
from travelMap import actionHandlers, apiHandlers;
from travelMap import mockViews;

urlpatterns = [
    # admin page
    url(r'^admin/', admin.site.urls),
    
    # static view page(not handlers), currently mocked
    url(r'^$', mockViews.index), # 

    # actions
    url(r'^welcome$', actionHandlers.welcome),
    url(r'^action/signup$', actionHandlers.signup),
    url(r'^action/login$', actionHandlers.login),
    url(r'^action/logout$', actionHandlers.logout),
    url(r'^action/setting$', actionHandlers.modify_setting),
    url(r'^action/visit$', actionHandlers.add_visited),
    url(r'^action/upload$', actionHandlers.upload),
    url(r'^action/follow$', actionHandlers.follow),
    url(r'^action/unfollow$', actionHandlers.unfollow),

    # apis
    url(r'^api/(?P<username>[0-9A-Za-z]+)$', apiHandlers.user),
    url(r'^api/(?P<username>[0-9A-Za-z]+)/(?P<cityName>[A-Za-z-]+)$', apiHandlers.city),
    url(r'^api/(?P<username>[0-9A-Za-z]+)/(?P<cityName>[A-Za-z-]+)/(?P<pictureId>\d+)$', apiHandlers.picture),
    url(r'^api/(?P<username>[0-9A-Za-z]+)/followers$', apiHandlers.followers),
    url(r'^api/(?P<username>[0-9A-Za-z]+)/following$', apiHandlers.following),
]
