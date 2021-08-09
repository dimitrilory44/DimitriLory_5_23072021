import {panier} from '../../utils/variables';
import {convertNumberInPrice} from "../../utils/functions";

export function getElementById(value) {
    // Récupération titre et descriptif
    const title = document.querySelector(".jumbotron h1");
    title.textContent = `${value.name}`;

    const descriptif = document.querySelector(".jumbotron p");
    descriptif.textContent = `${value.description}`;

    // Récupération des options objectif
    const option = document.getElementById('options');
    for(let opt of value.lenses) {
        option.innerHTML += `<option value="${opt}">${opt}</option>`;
    }

    // Récupération de l'image du produit
    const image = document.getElementById('image');
    image.innerHTML = `<img class="card-img-top" src="${value.imageUrl}"/>`;

    const quantite = document.getElementById('quantite');
    for(let qut = 1; qut <= 5; qut++ ) {
        quantite.innerHTML += `<option value="${qut}">${qut}</option>`;
    }
    
    const price = document.querySelector('.prix span');
    const priceConvert = convertNumberInPrice(`${value.price}`);
    price.textContent = `${priceConvert}`;

    // Visualisation du prix suivi la quantité
    quantite.addEventListener('change', (event) => {
        let newPrice = 0;
        const price = document.querySelector('.prix span');
        newPrice = `${value.price}` * parseInt(`${event.target.value}`);
        const priceConvert = convertNumberInPrice(`${newPrice}`);
        price.textContent = `${priceConvert}`;
    });

    const elmt = document.getElementById('goToBasket');
    const notif = document.getElementById("notification");
    
    let compteur = localStorage.length;

    // Initialisation de la variable produit
    const produit = [];
    const idObject = panier;
    
    if(panier !== null) {
        notif.innerText = idObject.length;
    } else {
        notif.innerText = 0;
    }
    
    elmt.addEventListener('click', e => {
        e.preventDefault();
        const nomAlert = document.querySelector("#alert span strong");
        nomAlert.textContent = `${value.name}`;
        const alert = document.getElementById("alert");
        alert.classList.replace("no-show", "show");
        
        notif.innerText = ++compteur;
        
        if(panier === null) {
            produit.push(
                {
                    id: value._id,
                    nom: value.name,
                    description: value.description,
                    img: value.imageUrl,
                    objectif: option.options[option.selectedIndex].value,
                    quantite: parseInt(quantite.options[quantite.selectedIndex].value),
                    prix: value.price
                }
            )
            let sendStorage = JSON.stringify(produit);
            localStorage.setItem('produit', sendStorage);
        } else {
            idObject.push(
                {
                    id: value._id,
                    nom: value.name,
                    description: value.description,
                    img: value.imageUrl,
                    objectif: option.options[option.selectedIndex].value,
                    quantite: parseInt(quantite.options[quantite.selectedIndex].value),
                    prix: value.price
                }
            )
            let sendStorage = JSON.stringify(idObject);
            localStorage.setItem('produit', sendStorage);
        }
    })   
}