from django.conf.urls import url
from . import apiHandlers

app_name = 'travelMap'
urlpatterns = [
    url(r'^login$', apiHandlers.login),
    url(r'^logout$', apiHandlers.logout),
    url(r'^pictures/(?P<picture_id>[0-9]+)$', apiHandlers.get_picture),
    url(r'^pictures/(?P<picture_id>[0-9]+)/messages$', apiHandlers.comments_of_picture),
    url(r'^travellers$', apiHandlers.signup),
    url(r'^travellers/(?P<username>[0-9A-Za-z]+)$', apiHandlers.get_traverller),
    url(r'^travellers/(?P<username>[0-9A-Za-z]+)/cities$', apiHandlers.visited_cities),
    url(r'^travellers/(?P<username>[0-9A-Za-z]+)/cities/pictures$', apiHandlers.pictures_of_city),
    url(r'^traverllers/(?P<username>[0-9A-Za-z]+)/followers$', apiHandlers.followers),
    url(r'^traverllers/(?P<username>[0-9A-Za-z]+)/followings$', apiHandlers.followings),
    url(r'^user/cities/visit$', apiHandlers.add_visited),
    url(r'^user/cities/upload$', apiHandlers.upload),
    url(r'^user/dashboard$', apiHandlers.dashboard),
    url(r'^user/followers$', apiHandlers.update_followers),
    url(r'^user/messages$', apiHandlers.messages_received),
    url(r'^user/settings$', apiHandlers.modify_setting),
]
