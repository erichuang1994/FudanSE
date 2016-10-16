from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect

def index(request):
	return HttpResponse('<h1>Index Page</h1>')