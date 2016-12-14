from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed, HttpResponseNotFound
from django.shortcuts import render
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

def signup(request):
    # username, password, email
    if (request.method == 'POST'):
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username == None or password == None:
            return HttpResponseBadRequest("Invalid parameters!")
        form = TravellerForm({'email': request.POST.get('email')})
        if not form.is_valid():
            return HttpResponseBadRequest("Invalid email address!")
        email = form.cleaned_data['email']

        if (User.objects.filter(username=username).count() > 0):
            return HttpResponseBadRequest('Username already exist!')
        user = User.objects.create_user(username=username, password=password, email=email)
        Traveller.objects.create(user=user)
        auth.login(request, user)
        return HttpResponse()
    return HttpResponseNotAllowed(["POST"])
    
def login(request):
    # username, password
    if (request.method == 'POST') :
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username == None or password == None:
            return HttpResponseBadRequest("Invalid parameters!")
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return HttpResponse()
        else:
            return HttpResponse('username or password incorrect!', status=401)
    return HttpResponseNotAllowed(["POST"])

@login_required
def logout(request):
    if (request.method == 'POST'):
        auth.logout(request)
        return HttpResponse()
    return HttpResponseNotAllowed(["POST"])

@login_required
def modify_setting(request):
    if request.method == "PUT":
        data = loads(request.body.decode("utf-8"))
        user = request.user
        if "password" in data:
            user.set_password(data['password'])
        if "email" in data:
            form = TravellerForm(data)
            if form.is_valid():
                user.email = form.cleaned_data["email"]
            else:
                return HttpResponseBadRequest("Invalid email address!")
        user.save()
        return HttpResponse()
    return HttpResponseNotAllowed(["PUT"])

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
    return HttpResponseNotAllowed(["POST"])

@login_required
def visited_cities(request, username):
    if (request.method == 'GET'):
        user = getOnlyElement(User.objects.filter(username=username))
        if (user is None):
            return HttpResponseNotFound("No Such User!")
        traveller = getOnlyElement(Traveller.objects.filter(user=user))
        result = []
        for city in traveller.cities.all():
            result.append({
                "name": city.name,
                "latitude": city.latitude,
                "longitude": city.longitude
            })
        return JsonResponse({"cities": result})
    return HttpResponseNotAllowed(["GET"])

@login_required
def upload(request, cityname):
    # image file / POST
    if (request.method == 'POST') :
        traveller = getOnlyElement(Traveller.objects.filter(user=request.user))
        city = getOnlyElement(City.objects.filter(name=cityname))
        if (city is None) :
            return HttpResponseNotFound("No Such City!")
        form = PictureForm(request.POST, request.FILES)
        if not form.is_valid():
            return HttpResponseBadRequest("Bad request!")
        description = form.cleaned_data['description']
        picture = Picture.objects.create(description=description, time=timezone.now(), traveller=traveller, city=city, pic_file=form.cleaned_data['picture'])
        return HttpResponse()
    return HttpResponseNotAllowed(["POST"])

@login_required
def pictures_of_city(request, username, cityname):
    if (request.method == 'GET') :
        traveller = getOnlyElement(Traveller.objects.filter(user__username=username))
        if traveller is None:
            return HttpResponseNotFound("No Such User!")

        city = getOnlyElement(traveller.cities.filter(name=cityname))
        if city is None:
            return HttpResponseNotFound("No such visited city of the user!") 

        data = []
        for p in Picture.objects.filter(traveller=traveller, city=city):
            data.append({
                "id": p.id,
                "description": p.description,
                "like_count": p.like_set.count(),
                "time": p.time,
                "url": p.pic_file.url
            })
        return JsonResponse({"pictures": data})

    return HttpResponseNotAllowed(["GET"])

@login_required
def get_picture(request, picture_id):
    if (request.method == 'GET') :
        picture = getOnlyElement(Picture.objects.filter(id=picture_id))
        if (picture is None) :
            return HttpResponseNotFound("No Such Picture!")
        return JsonResponse({
            "username": picture.traveller.user.username,
            "cityname": picture.city.name,
            "description": picture.description,
            "like_count": picture.like_set.count(),
            "time": picture.time,
            "url": picture.pic_file.url
        })
    return HttpResponseNotAllowed(["GET"])

@login_required
def comments_of_picture(request, picture_id):
    if (request.method == 'GET'):
        picture = getOnlyElement(Picture.objects.filter(id=picture_id))
        if (picture is None) :
            return HttpResponseNotFound("No Such Picture!")

        data = []
        for m in Message.objects.filter(picture=picture):
            data.append({
                "content": m.content,
                "time": m.time,
                "traveller": m.traveller.user.username,
            })
        return JsonResponse({"messages": data})

    return HttpResponseNotAllowed(["GET"])

@login_required
def get_traveller(request, username):
    if (request.method == 'GET'):
        user = getOnlyElement(User.objects.filter(username=username))
        if (user is None):
            return HttpResponseBadRequest("No Such User!")
        return JsonResponse({
            "username" : username,
            "email" : user.email
        })
    return HttpResponseNotAllowed(["GET"])

@login_required
def update_followings(request, username):
    user = request.user
    if (request.method == 'POST'):
        traveller = getOnlyElement(Traveller.objects.filter(user=user))
        following = getOnlyElement(Traveller.objects.filter(user__username=username))
        if following is None:
            return HttpResponseBadRequest("No Such User!")
        traveller.follows.add(following)
        return HttpResponse()

    if (request.method == 'DELETE'):
        traveller = getOnlyElement(Traveller.objects.filter(user=user))
        following = getOnlyElement(Traveller.objects.filter(user__username=username))
        if following is None:
            return HttpResponseBadRequest("No Such User!")
        traveller.follows.remove(following)
        return HttpResponse()

    return HttpResponseNotAllowed(["POST", "DELETE"])

@login_required
def messages_received(request):
    if request.method == 'GET':
        message_list = Message.objects.filter(picture__traveller__user=request.user)
        data = []
        for m in message_list:
            data.append({
                "content": m.content,
                "time": m.time,
                "traveller": m.traveller.user.username,
                "picture": m.picture.pic_file.url
            })
        return JsonResponse({"messages": data})
    return HttpResponseNotAllowed(["GET"])

@login_required
def followers(request, username):
    if request.method == 'GET':
        traveller = getOnlyElement(Traveller.objects.filter(user__username=username))
        if traveller is None:
            return HttpResponseBadRequest("No such traveller!")
        follower_list = [t.user.username for t in traveller.traveller_set.all()]
        return JsonResponse({"followers": follower_list})
    return HttpResponseNotAllowed(["GET"])

@login_required
def followings(request, username):
    if request.method == 'GET':
        traveller = getOnlyElement(Traveller.objects.filter(user__username=username))
        if traveller is None:
            return HttpResponseBadRequest("No such traveller!")
        following_list = [t.user.username for t in traveller.follows.all()]
        return JsonResponse({"followings": following_list})
    return HttpResponseNotAllowed(["GET"])

@login_required
def dashboard(request):
    if request.method == "GET":
        traveller = getOnlyElement(Traveller.objects.filter(user=request.user))

        picture_list = []
        for following in traveller.follows.all():
            picture_list += Picture.objects.filter(traveller=following)

        data = []
        for p in picture_list:
            data.append({
                "username": p.traveller.user.username,
                "cityname": p.city.name,
                "description": p.description,
                "like_count": p.like_set.count(),
                "time": p.time,
                "url": p.pic_file.url
            })
        return JsonResponse({"pictures": data})

    return HttpResponseNotAllowed(["GET"])

@login_required
def like_picture(request, picture_id):
    if request.method == "GET":
        like = len(Like.objects.filter(picture__id=picture_id, traveller__user=request.user)) > 0
        return JsonResponse({"like": like})
    elif request.method == "POST":
        form = LikeForm(request.POST)
        if not form.is_valid():
            return HttpResponseBadRequest("Bad request!")
        picture = getOnlyElement(Picture.objects.filter(id=picture_id))
        if picture == None:
            return HttpResponseBadRequest("No such picture!")
        traveller = Traveller.objects.get(user=request.user)
        if form.cleaned_data["like"]:
            Like.objects.get_or_create(picture=picture, traveller=traveller)
        else:
            Like.objects.filter(picture=picture, traveller=traveller).delete()
        return HttpResponse()

    return HttpResponseNotAllowed(["GET", "POST"])

