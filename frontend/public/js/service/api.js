import {apiURL} from './config';

// Méthode GET pour récupérer tous les éléments pour les 
export async function getAllProduits() {
    // Je récupère toutes les valeurs sur la page d'accueil
    return fetch(`${apiURL}/api/cameras`) 
        .then(function(res1) {
            if (res1.ok) {
                return res1.json();
            }
        })
        .then((produits) => produits)
        .catch((err) => {
            alert(err);
        });
}

// Méthode GET pour récupérer les éléments suivant leur id
export async function getOneElementWithId(elementId) {
    // Je récupère par l'id sur la page d'accueil
    return fetch(`${apiURL}/api/cameras/${elementId}`) 
        .then(function(res2) {
            if (res2.ok) {
                return res2.json();
            }
        })
        .then((productsById) => productsById)
        .catch((err) => {
            alert(err);
        });
}

// Méthode POST pour envoyer les données au backend pour order_id
export async function sendOrder(contact, products) {
    fetch(`${apiURL}/api/cameras/order`, {
        method: "POST",
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({contact, products})
    })
    .then(function(res3) {
        if (res3.ok) {
          return res3.json();
        }
    })
    .then((value) => {
         localStorage.setItem("order", JSON.stringify(value));
         document.location.href = "order.html";
    })
    .catch((error) => {
      alert(error);
    });
}