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

