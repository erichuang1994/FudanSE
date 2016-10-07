.PHONY: run clean

MODELS = travelMap/models.py
MIGRATIONS = travelMap/migrations/*_initial.py travelMap/migrations/*_auto_*.py

run: db.sqlite3
	python3 manage.py runserver

db.sqlite3: $(MODELS) insertData.py
	rm -f db.sqlite3
	rm -f $(MIGRATIONS)
	python3 manage.py makemigrations
	python3 manage.py migrate
	env DJANGO_SETTINGS_MODULE=FudanSE.settings python3 insertData.py

clean:
	rm -f db.sqlite3
	rm -f $(MIGRATIONS)