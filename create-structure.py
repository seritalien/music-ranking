import os

# Structure du projet
directories = [
    "client/public",
    "client/src/components",
    "client/src/pages",
    "client/src/services",
    "server/controllers",
    "server/models",
    "server/routes",
    "server/data"
]

# Création des répertoires
for directory in directories:
    os.makedirs(directory, exist_ok=True)

# Création des fichiers vides
files = [
    "client/public/index.html",
    "client/src/components/AlbumCard.js",
    "client/src/components/ArtistDropdown.js",
    "client/src/components/DateSlider.js",
    "client/src/components/GenreFilter.js",
    "client/src/pages/HomePage.js",
    "client/src/pages/ArtistPage.js",
    "client/src/services/api.js",
    "client/src/App.js",
    "client/src/index.js",
    "client/package.json",
    "server/controllers/artistController.js",
    "server/routes/artistRoutes.js",
    "server/server.js"
]

for file in files:
    with open(file, 'w') as f:
        pass

print("Structure du projet créée avec succès.")
