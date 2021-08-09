import { convertNumberInPrice } from "../../utils/functions";

// Affichage de tous les produits sur la page d'accueil
export function getAllElement(values) {
    let liste = document.getElementById('photos');
    
    for(let value of values) {
        let price = convertNumberInPrice(`${value.price}`);

        liste.innerHTML += 
        `
            <div class="col-lg-6 mb-3">
                <div class="card">
                    <img class="card-img-top" src="${value.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <div class="d-flex">
                            <h5 class="card-title">${value.name}</h5>
                            <div class="ml-auto align-items-center"><h5><strong>${price}</strong></h5></div>
                        </div>
                        <p class="card-text">${value.description}</p>
                        <a href="pages/produit.html?_id=${value._id}" class="btn btn-outline-secondary btn--width">
                            Descriptif du produit
                        </a>
                    </div>
                </div>
            </div>
        `
    }
}