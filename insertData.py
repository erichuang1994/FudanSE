from datetime import datetime
import json

import django
django.setup()

from travelMap.models import *
from django.contrib.auth.models import User
from django.core.files import File
from django.utils import timezone

if __name__ == "__main__":
    user1 = User.objects.create_user(username='Haoming', password='123123', email='wow@such.doge')
    traveller1 = Traveller.objects.create(user=user1)

    user2 = User.objects.create_user(username='Xiaotao', password='123456', email='abc@such.doge')
    traveller2 = Traveller.objects.create(user=user2)
    traveller2.follows.add(traveller1)

    cities = []
    for city in json.load(open("cities.json")):
        cities.append(City.objects.create(name=city['city'], latitude=city['lat'], longitude=city['lng']))

    city1, city2 = cities[0:2]
    traveller2.cities.add(city1, city2)

