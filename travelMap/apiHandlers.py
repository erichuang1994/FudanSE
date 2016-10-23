from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from travelMap import models
from travelMap.mockViews import *
from travelMap.models import *

# Handlers for API calls from frontend

@csrf_exempt
def signup(request):
    # username, password, email
    username = request.POST['username']
    password = request.POST['password']
    email = request.POST['email']
    print(request.POST)
    if (User.objects.filter(username=username).count() > 0):
        print(User.objects.filter(username=username))
        return HttpResponseBadRequest('Username already exist!')
    user = User.objects.create_user(username=username, password=password, email=email)
    Traveller.objects.create(user=user)
    auth.login(request, user)
    return HttpResponse()
    
@csrf_exempt
def login(request):
    # username, password
    username = request.POST['username']
    password = request.POST['password']
    user = auth.authenticate(username=username, password=password)
    if user is not None:
        auth.login(request, user)
        return HttpResponse()
    else:
        return HttpResponse('username or password incorrect!', status=401)

@csrf_exempt
@login_required
def logout(request):
    auth.logout(request)
    return HttpResponse()

@csrf_exempt
@login_required
def comments_of_picture(request, picture_id):
    pass

@csrf_exempt
@login_required
def modify_setting(request):
    # password
    username = request.user.get_username();
    user = User.objects.filter(username=username)[0];
    user.set_password(request.POST['password'])
    user.save()
    return HttpResponse()

@csrf_exempt
@login_required
def add_visited(request, cityname):
    # cityname
    return HttpResponse(cityname)

@csrf_exempt
@login_required
def upload(request, cityname):
    # image file
    pass

@csrf_exempt
@login_required
def update_followers(request):
    # username
    pass

@csrf_exempt
@login_required
def messages_received(request):
    # username
    pass

@csrf_exempt
@login_required
def get_traverller(request, username):
    # TODO
    pass

@csrf_exempt
@login_required
def visited_cities(request, username):
    # TODO
    pass

@csrf_exempt
@login_required
def pictures_of_city(request, username, cityName):
    # TODO
    pass

@csrf_exempt
@login_required
def get_picture(request, pictureId):
    # TODO
    pass

@csrf_exempt
@login_required
def followers(request, username):
    # TODO
    pass

@csrf_exempt
@login_required
def followings(request, username):
    # TODO
    pass

@csrf_exempt
@login_required
def dashboard(request):
    # TODO
    pass

