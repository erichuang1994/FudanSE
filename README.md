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
| Information of the picture | GET | /pictures/PICTUREID | | username, cityname, description, like\_count, time, url |
| Comments of the picture | GET | /pictures/PICTUREID/messages | | [comments] |
| Create comment | POST | /pictures/PICTUREID/messages | content | |
| Create traveller | POST | /travellers | username, password, email | |
| Get traveller | GET | /travellers/USERNAME | | username, email |
| List of visited cities | GET | /travellers/USERNAME/cities | | [cityname] |
| Pictures of the city | GET | /travellers/USERNAME/cities/CITYNAME/pictures | | [pictures] |
| List of followers | GET | /travellers/USERNAME/followers | | [username] |
| List of followings | GET | /travellers/USERNAME/followings | | [username] |
| Add visited city | POST | /user/cities/CITYNAME | | |
| Upload picture | POST | /user/cities/CITYNAME/pictures | description, picture(binary file) | |
| Recent pictures of followings | GET | /user/dashboard | | [pictures] |
| Follow people | POST | /user/followings/USERNAME | | |
| Unfollow people | DELETE | /user/followings/USERNAME | | |
| List of comments received | GET | /user/messages | | [comments] |
| Update traveller | PUT | /user/settings | password, email | |

