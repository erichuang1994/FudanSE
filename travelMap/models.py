from django.db import models

# Models for travalMap
# Follows this simple schema:
# Traveller(tid, username, password, email)
# City(cid, name)
# Picture(pid, description, good, time, file, tid, cid)
# Message(mid, content, time, tid, pid)
# Visit(tid, cid)
# Follow(tid1, tid2)

class City(models.Model):
	name = models.CharField("City's name", max_length=50)

class Traveller(models.Model):
    # username = models.CharField("User's login name", max_length=50)
    # password = models.CharField("User's password", max_length=50)
    email = models.EmailField("User's email address", max_length=50)
    follows = models.ManyToManyField("self",symmetrical=False)
    visited_cities = models.ManyToManyField(City)

class Picture(models.Model):
	# file
	description = models.CharField("Picture's description", max_length=1000)
	like_count = models.IntegerField("Number of likes")
	time = models.DateTimeField("Picture's upload time")
	tid = models.ForeignKey(
		Traveller,
		on_delete = models.CASCADE,
	)
	cid = models.ForeignKey(
		City,
		on_delete = models.CASCADE,
	)

class Message(models.Model):
	content = models.CharField("Message's content", max_length=1000)
	time = models.DateTimeField("Message send time")
	tid = models.ForeignKey(
		Traveller,
		on_delete = models.CASCADE,
	)
	pid = models.ForeignKey(
		Picture,
		on_delete = models.CASCADE,
	)
