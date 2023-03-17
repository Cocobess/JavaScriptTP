# TP Javascript : 



## _Objectifs du Projet_ :

- Comprendre comment JavaScript et le DOM interagissent pour créer des applications web interactives.
- Savoir utiliser l'API Fetch pour récupérer des données d'API externes.
- Savoir manipuler le DOM pour afficher dynamiquement des données en réponse à un événement.
- Afficher une image récupérer depuis une API.

## _Le fonctionnement_ :

- Le programme va utiliser une API qui génère une image aléatoire d'un renard.
- Utilisation de la méthode API Fetch afin de récupérer les données de l'API dans la fonction "fetchPhotos".
- Utilisation de la methode "addeventlistener" qui affiche une image lorsque que l'on clique sur le bouton car elle appelle la fonction "affiche".
- Une Fonction "affiche" qui appelle la fonction "fetchPhotos" qui récupère les données de l'API, la fonction "affiche" permet d'afficher les photos en ajoutant le liens de l'image récupérée depuis l'API dans la source de l'image.


## _Comment l'utiliser_ :

- Pour utiliser le programme il faut cliquer sur le bouton où "Afficher un renard" est marqué afin d'afficher dans la page une image d'un renard aléatoire (image qui provient de l'API).

## _API_ :

- Utilisation de l'API suivante : https://randomfox.ca/floof/ .
- Cette API permet génère une image aléatoire d'un renard.

## _Outils Utilisés_ :

- Une API.
- Visual Studio Code.
- La méthode fetch.
- La méthode json() afin de convertir les données
récupérées depuis l'API en un objet JavaScript.

## _Difficultées rencontrées_ :

- Trouver une bonne API.
- Faire afficher l'image.
- Rendre le site agréable à regarder.