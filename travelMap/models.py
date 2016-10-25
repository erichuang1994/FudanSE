from django.db import models
from django.contrib.auth.models import User, UserManager

class City(models.Model):
    name = models.CharField("City's name", max_length=50)
    latitude = models.DecimalField(max_digits=5, decimal_places=2)
    longitude = models.DecimalField(max_digits=5, decimal_places=2)

class Traveller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    follows = models.ManyToManyField("self", symmetrical=False)
    cities = models.ManyToManyField(City)

class Picture(models.Model):
    description = models.CharField("Picture's description", max_length=1000)
    like_count = models.IntegerField("Number of likes")
    time = models.DateTimeField("Picture's upload time")
    traveller = models.ForeignKey(Traveller, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    pic_file = models.ImageField(upload_to="pictures")

class Message(models.Model):
    content = models.CharField("Message's content", max_length=1000)
    time = models.DateTimeField("Message send time")
    traverller = models.ForeignKey(Traveller, on_delete=models.CASCADE)
    picture = models.ForeignKey(Picture, on_delete=models.CASCADE)

