//selection du bouton et de l'image grace a la méthode "getelementbyid" et une méthodes de l'objet "DOM"
//afin ensuite de modifier ces attributs
const bouton = document.getElementById("bouton") 
const image = document.getElementById("image")


//Fonction "fetchPhotos" permettant de recuperer des données 
//depuis une API externe
function fetchPhotos() { 
    return fetch('https://randomfox.ca/floof/'); // utilisation de API Fetch
}

//utilisation de la methode "addeventlistener"
//qui execute la fonction "affiche" lorsque que l'on clique sur le bouton
bouton.addEventListener('click', ()=> { 
    affiche ();
})
    

//Fonction "affiche" qui appelle la fonction "fetchPhotos" qui récupère les données de l'API
//fonction qui permet d'afficher les photos en ajoutant le liens de l'image recuperer depuis l'API
//dans la source de l'image 
    function affiche () {
    const foxeImg = fetchPhotos() 
        .then((httpReponse) => {
            return httpReponse.json()
        }) 
        .then((data) => {
                console.log(data.image)
                image.src = data.image
        })
}