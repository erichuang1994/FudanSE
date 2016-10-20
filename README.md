# FudanSE

## Dependence
* [Django](https://www.djangoproject.com/)

## Tables
[ER Diagram](doc/ER_diagram.svg)

* Traveller(**tid**, username, password, email)
* City(**cid**, name)
* Picture(**pid**, description, like\_count, time, file, tid, cid)
* Message(**mid**, content, time, tid, pid)
* Visit(**tid**, **cid**)
* Follow(**tid1**, **tid2**)

## Webpages
1. Index
  * Login: form
  * Signup: button
2. Signup
  * Form
3. News board
  * Friends' new pictures
4. Profile
  * Personal information
  * Follow/followed list (myself), follow/unfollow button (others)
  * Map with visited cities
5. City
  * Pictures in this city: scrollable list
6. Picture
  * Description
  * Information related to the picture
  * Comments: scrollable list
  * Publish a comment
7. Setting
  * Modify personal information: form
8. Add city
  * Search
9. Upload picture
  * Form
10. Follow list
  * List
11. Followed list
  * List

## API
Prefix: /api

| Description | HTTP Method | Endpoint | Parameters  | Response |
| --- | --- | --- | --- | --- |
| Login | POST | /login | username, password | |
| Logout | POST | /logout | | |
| Create traveller | POST | /travellers | username, password, email | |
| Get traveller | GET | /travellers/USERNAME | | username, email |
| Update traveller | PUT | /travellers/USERNAME | password, email | |
| Add visited city | POST | /travellers/USERNAME/cities/CITYNAME | | |
| Upload picture | POST | /travellers/USERNAME/cities/CITYNAME/pictures | description, image file | |
| Follow someone | POST | /travellers/USERNAME/followers/USERNAME | | |
| Unfollow someone | DELETE | /travellers/USERNAME/followers/USERNAME | | |
| List of visited cities | GET | /travellers/USERNAME/cities | | [cityname] |
| Pictures of the city | GET | /travellers/USERNAME/cities/CITYNAME/pictures | | [pictures] |
| Information of the picture | GET | /pictures/PICTUREID | | username, cityname, description, like\_count, time, url |
| List of followers | GET | /travellers/USERNAME/followers | | [username] |
| List of followings | GET | /travellers/USERNAME/followings | | [username] |
| Create comment | POST | /pictures/PICTUREID/messages | username, content | |
| Comments of the picture | GET | /pictures/PICTUREID/messages | | [comments] |
| Comments of the user | GET | /travellers/USERNAME/messages | | [comments] |
