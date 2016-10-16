from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from travelMap.mockViews import *
from travelMap.models import *
#make sure all actions are in POST methods

@csrf_exempt
@login_required
def welcome(request):
    data = {"name": request.user.get_username(), "email": request.user.email}
    return HttpResponse(str(data))

@csrf_exempt
def signup(request):
	# username, password, email
	username = request.POST['username']
	password = request.POST['password']
	email = request.POST['email']
	print(request.POST)
	if (User.objects.filter(username=username).count() > 0):
		print(User.objects.filter(username=username))
		return HttpResponseNotFound('Username already exist!')
	user = User.objects.create_user(username=username, password=password, email=email)
	Traveller.objects.create(user=user)
	auth.login(request, user)
	return HttpResponseRedirect(reverse(index))
	
@csrf_exempt
def login(request):
	# username, password
	username = request.POST['username']
	password = request.POST['password']
	user = auth.authenticate(username=username, password=password)
	if user is not None:
		auth.login(request, user)
		# Redirect to a success page.
		return HttpResponseRedirect(reverse(welcome))
	else:
		# Return an 'invalid login' error message.
		return HttpResponseNotFound('username or password incorrect!')


@csrf_exempt
@login_required
def logout(request):
	auth.logout(request)
	return HttpResponseRedirect(reverse(index))

@csrf_exempt
@login_required
def modify_setting(request):
	# password
	username = request.user.get_username();
	user = User.objects.filter(username=username)[0];
	user.set_password(request.POST['password'])
	user.save()
	#return to previous page(used HTTP_REFERER, can also simply replace with modify_setting page)
	return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

@csrf_exempt
@login_required
def add_visited(request):
	# cityname
	pass

@csrf_exempt
@login_required
def upload(request):
	# image file
	pass

@csrf_exempt
@login_required
def follow(request):
    # username
    pass

@csrf_exempt
@login_required
def unfollow(request):
    # username
    pass
