# FudanSE

## Dependence
* [Django](https://www.djangoproject.com/)

## Tables
[ER Diagram](doc/ER_diagram.svg)

* Traveller(**tid**, username, password, email)
* City(**cid**, name)
* Picture(**pid**, description, good, time, file, tid, cid)
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

## URL
* http://DOMAIN
* http://DOMAIN/signup
* http://DOMAIN/login
* http://DOMAIN/logout
* http://DOMAIN/setting
* http://DOMAIN/visit
* http://DOMAIN/upload
* http://DOMAIN/follow
* http://DOMAIN/unfollow
* http://DOMAIN/USER
* http://DOMAIN/USER/CITY
* http://DOMAIN/USER/CITY/PICTURE
* http://DOMAIN/USER/followers
* http://DOMAIN/USER/following

