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
| Description | HTTP Method | URL | Parameters  | Return |
| --- | --- | --- | --- | --- |
| Login | POST | /api/login | username, password | |
| Logout | POST | /api/logout | | |
| Create traveller | POST | /api/traveller | username, password, email | |
| Get traveller | GET | /api/traveller/USERNAME | | |
| Update traveller | PUT | /api/traveller/USERNAME | username, password, email | |
| Add visited city | POST | /api/traveller/USERNAME/city/CITYNAME | | |
| Upload picture | POST | /api/traveller/USERNAME/city/CITYNAME/picture | description, image file | |
| Follow someone | POST | /api/traveller/USERNAME/follow/USERNAME | | |
| Unfollow someone | DELETE | /api/traveller/USERNAME/follow/USERNAME | | |
| List of visited cities | GET | /api/traveller/USERNAME/city | | [cityname] |
| Pictures of the city | GET | /api/traveller/USERNAME/city/CITYNAME/picture | [pictures] | |
| Information of the picture | GET | /api/picture/PICTUREID | | id, description, like\_count, time, url |
| List of followers | GET | /api/traveller/USERNAME/follow | | [username] |
| List of following | GET | /api/traveller/USERNAME/followed | | [username] |
| Create comment | POST | /api/message | content | |
| Comments of the picture | GET | /api/picture/PICTUREID/message | | [comments] |
| Comments of the user | GET | /api/traveller/USERNAME/message | | [comments] |

