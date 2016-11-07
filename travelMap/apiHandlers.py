from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from travelMap import models
from travelMap.mockViews import *
from travelMap.models import *
from json import dumps, loads
from django.utils import timezone

# Handlers for API calls from frontend

def getOnlyElement(a):
    if (len(a) != 1) :
        return None
    return a[0]

@csrf_exempt
def signup(request):
    # username, password, email
    if (request.method == 'POST'):
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        if (User.objects.filter(username=username).count() > 0):
            print(User.objects.filter(username=username))
            return HttpResponseBadRequest('Username already exist!')
        user = User.objects.create_user(username=username, password=password, email=email)
        Traveller.objects.create(user=user)
        auth.login(request, user)
        return HttpResponse()
    return HttpResponseNotFound()
    
@csrf_exempt
def login(request):
    # username, password
    if (request.method == 'POST') :
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return HttpResponse()
        else:
            return HttpResponse('username or password incorrect!', status=401)
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def logout(request):
    if (request.method == 'POST'):
        auth.logout(request)
        return HttpResponse()
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def modify_setting(request):
    # password
    user = request.user
    user.set_password(request.POST['password'])
    user.save()
    return HttpResponse()

@csrf_exempt
@login_required
def add_visited(request, cityname):
    # / POST
    if (request.method == 'POST'):
        city = getOnlyElement(City.objects.filter(name=cityname))
        if (city is None) :
            return HttpResponseNotFound("No Such City")
        traveller = getOnlyElement(Traveller.objects.filter(user=request.user))
        traveller.cities.add(city)
        return HttpResponse()
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def visited_cities(request, username):
    if (request.method == 'GET'):
        user = getOnlyElement(User.objects.filter(username=username))
        if (user is None):
            return HttpResponseNotFound("No Such User!")
        traveller = getOnlyElement(Traveller.objects.filter(user=user))
        result = []
        for x in list(traveller.cities.all()):
            result.append(x.name)
        return HttpResponse(dumps(result))
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def upload(request, cityname):
    # image file / POST
    if (request.method == 'POST') :
        traveller = getOnlyElement(Traveller.objects.filter(user=request.user))
        description = request.POST['description']
        city = getOnlyElement(City.objects.filter(name=cityname))
        if (city is None) :
            return HttpResponseNotFound("No Such City!")
        picture = Picture.objects.create(description=description, like_count=0, time=timezone.now(), traveller=traveller, city=city, pic_file=request.FILES['picture'])
        print(picture.id)
        return HttpResponse()
    return HttpResponseNotFound()    

@csrf_exempt
@login_required
def pictures_of_city(request, username, cityname):
    if (request.method == 'GET') :
        city = getOnlyElement(City.objects.filter(name=cityname))
        if (city is None) :
            return HttpResponseNotFound("No Such City!")            
        pictures = Picture.objects.filter(city=city)
        return HttpResponse(pictures)        
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def get_picture(request, picture_id):
    if (request.method == 'GET') :
        picture = getOnlyElement(Picture.objects.filter(id=picture_id))
        if (picture is None) :
            return HttpResponseNotFound("No Such Picture!")
        return HttpResponse(Picture)
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def comments_of_picture(request, picture_id):
    if (request.method == 'GET'):
        picture = getOnlyElement(
            Picture.objects.filter(id=picture_id))
        if (picture is None) :
            return HttpResponseNotFound("No Such Picture!")
        messages = Message.objects.filter(picture=picture)
        return HttpResponse(messages)
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def get_traverller(request, username):
    if (request.method == 'GET'):
        user = getOnlyElement(User.objects.filter(username=username))
        if (user is None):
            return HttpResponseBadRequest("No Such User!")
        result = {"username" : username, "email" : user.email}
        return HttpResponse(dumps(result))
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def update_followers(request):
    user = request.user
    if (request.method == 'GET'):
        traveller = getOnlyElement(Traveller.objects.filter(user=user))
        traveller.follows.add(request.POST['username'])
        return HttpResponse()
    if (request.method == 'DELETE'):
        traveller = getOnlyElement(Traveller.objects.filter(user=user))
        traveller.follows.remove(request.DELETE['username'])
        return HttpResponse()
    return HttpResponseNotFound()

@csrf_exempt
@login_required
def messages_received(request):
    # username / POST
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

