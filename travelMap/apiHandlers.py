from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from travelMap import models

# Handlers for API calls from frontend

@csrf_exempt
@login_required
def user(request, username):
    # TODO
    pass

@csrf_exempt
@login_required
def city(request, username, cityName):
    # TODO
    pass

@csrf_exempt
@login_required
def picture(request, username, cityName, pictureId):
    # TODO
    pass

@csrf_exempt
@login_required
def followers(request, username):
    # TODO
    pass

@csrf_exempt
@login_required
def following(request, username):
    # TODO
    pass
