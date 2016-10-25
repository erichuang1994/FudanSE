import django;
django.setup()

from travelMap.models import *
from django.contrib.auth.models import User

if __name__ == "__main__":
	user1 = User.objects.create_user(username='Haoming', password='123123', email='wow@such.doge')

	city1 = City.objects.create(name='Shanghai')
	city2 = City.objects.create(name='Hongkong')
	city3 = City.objects.create(name='Washington')
