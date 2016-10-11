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
| Description | HTTP Method | URL | Parameters  |
| --- | --- | --- | --- |
| Homepage | GET | / | |
| Page to signup | GET | /signup | |
| Signup | POST | /signup | username, password, email |
| Page to login | GET | /login | |
| Login | POST | /login | username, password |
| Logout | GET | /logout | |
| Setting page | GET | /setting | |
| Modify user information | POST | /setting | username, password, email |
| Page to add visited city | GET | /visit | |
| Add visited city | POST | /visit | city name |
| Page to upload picture | GET | /upload | |
| Upload picture | POST | /upload | image file |
| Follow someone | POST | /follow | username |
| Unfollow someone | POST | /unfollow | username |
| Map of the user | GET | /USERNAME | |
| Pictures of the city | GET | /USERNAME/CITY | |
| Information of the picture | GET | /USERNAME/CITY/PICTURE | |
| Page of followers | GET | /USER/followers | |
| Page of following | GET | /USER/followering | |

