from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from travelMap import models

# Create your views here.

def index(request):
    # TODO

def signup(request):
    if request.method == "GET":
        # TODO
    elif request.method == "POST":
        # TODO

def login(request):
    if request.method == "GET":
        # TODO
    elif request.method == "POST":
        # TODO

@login_required
def logout(request):
    # TODO

@login_required
def setting(request):
    if request.method == "GET":
        # TODO
    elif request.method == "POST":
        # TODO

@login_required
def visit(request):
    if request.method == "GET":
        # TODO
    elif request.method == "POST":
        # TODO

@login_required
def upload(request):
    if request.method == "GET":
        # TODO
    elif request.method == "POST":
        # TODO

@login_required
def follow(request):
    # TODO

@login_required
def unfollow(request):
    # TODO

@login_required
def user(request, username):
    # TODO

@login_required
def city(request, username, cityName):
    # TODO

@login_required
def picture(request, username, cityName, pictureId):
    # TODO

@login_required
def followers(request, username):
    # TODO

@login_required
def following(request, username):
    # TODO

