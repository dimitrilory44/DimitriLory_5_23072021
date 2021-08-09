import {convertNumberInPrice} from "../../utils/functions";

export function displayTicket(order, total) {
    let contact = [];
    contact.push(order.contact);
    const ref = document.querySelector("#reference strong");
    ref.innerText = `${order.orderId}`;

    const totalCommande = document.querySelector(".totalCommande strong");
    totalCommande.innerText = `${convertNumberInPrice(total)}`;;
    
    contact.forEach((element) => {
        const c = document.getElementById("nomComplet");
        c.textContent = `${element.firstName + ' ' + element.lastName}`;

        const email = document.getElementById("email");
        email.textContent = `${element.email}`;

        const addresse = document.getElementById("adresse");
        addresse.textContent = `${element.address}`;
        
        const city = document.getElementById("ville");
        city.textContent = `${element.city}`;
    })

    const fin = document.getElementById("finCommande");
    const retourAccueil = document.getElementById("retour");
    
    fin.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
        document.location.href = "../index.html";
    });
    
    retourAccueil.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
        document.location.href = "../index.html";
    });
} 