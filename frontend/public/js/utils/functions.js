import {panier} from '../utils/variables';

export function convertNumberInPrice(number) {
    return Intl.NumberFormat('fr-FR', 
    {
        style: 'currency',
        currency: 'EUR'
    }).format(number/100);
}

export function getParameters() {
    let str = window.location.href;
    let url = new URL(str);
    let search_params = new URLSearchParams(url.search);
    if(search_params.has('_id')) {
        return search_params.get('_id');
    }
}

export function cacheBasket() {
    if(panier !== null) {
        const notif = document.getElementById("notification");
        notif.innerText = JSON.parse(localStorage.getItem('produit')).length;
    } else {
        const notif = document.getElementById("notification");
        notif.innerText = 0;
    }
}

// Opérations sur le panier
export async function delElementPanier(event) {
    let indexValue = event.target.getAttribute("data-index");
    panier.splice(indexValue, 1);
    localStorage.setItem("produit", JSON.stringify(panier));
    window.location.reload();
}

export async function diminuerQuantite(event) {
    let indexQuantite = event.target.getAttribute("data-index");
    if(panier[indexQuantite].quantite <= 1) {
        panier.splice(indexQuantite, 1);
        localStorage.setItem("produit", JSON.stringify(panier));
        window.location.reload();
    } else {
        panier[indexQuantite].quantite--;
        localStorage.setItem("produit", JSON.stringify(panier));
        window.location.reload();
    }
}

export async function augmenterQuantite(event) {
    let indexQuantite = event.target.getAttribute("data-index");
    panier[indexQuantite].quantite++;
    localStorage.setItem("produit", JSON.stringify(panier));
    window.location.reload();
}

export function calculTotal(value) {
    let totalValue = 0;
    value.forEach((camera) => {
        totalValue = totalValue + camera.prix * camera.quantite;
    });
    const total = document.getElementById("total");
    total.innerText += `${convertNumberInPrice(totalValue)}`;
    const totalValueString = totalValue.toString();
    localStorage.setItem("total", totalValueString);
    return total;
}