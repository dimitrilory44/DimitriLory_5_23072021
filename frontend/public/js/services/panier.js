import {cacheBasket, convertNumberInPrice, delAllElementPanier, delElementPanier, diminuerQuantite, augmenterQuantite, calculTotal, panier} from '../utils/functions';

cacheBasket();


if(JSON.parse(localStorage.getItem('produit')) === null || panier.length === 0) {
    const newElmt = document.createElement("section");
    const elmt = document.getElementById("main");

    newElmt.classList.add('jumbotron', 'd-flex', 'shadow', 'bg-body', 'mt-3', 'flex-column');
   
    elmt.appendChild(newElmt);

    const h1 = document.createElement("h1");
    h1.classList.add('text-secondary', 'text-center');

    newElmt.appendChild(h1);

    h1.innerText = "Pas de commande en cours, commencer votre achat";

    const a = document.createElement("a");

    a.classList.add('btn', 'btn-primary');
    a.style.width = "200px";
    a.style.margin = "20px auto";
    a.setAttribute("href", "../index.html");
    a.innerText = "Retour au commande"

    newElmt.appendChild(a);
} else {

    const newElmt = document.createElement("section");
    const elmt = document.getElementById("main");

    newElmt.classList.add("container", "my-5", "align-middle");
    elmt.appendChild(newElmt);

    newElmt.innerHTML = 
        `   
            <table class="table table-hover">
                <div class="d-flex mb-3">
                    <h1>Mon panier</h1>
                    <button id="panier" class="btn btn-outline-danger ml-auto">Vider mon panier</button>
                </div>
                <tbody id="corps" class="text-center"></tbody>
                <tfoot>
                    <tr>
                        <th colspan="3" class="bg-white"></th>
                        <th scope="row" class="text-center label">
                            total
                        </th>
                        <td id="total" class="d-flex justify-content-center"></td>
                    </tr>
                </tfoot>
            </table>

            <div class="d-flex justify-content-end">
                <button id="valider" class="btn btn-outline-success">Valider ma commande</button>
            </div>
        `;
    
    panier.forEach((p) => {
        let index = panier.indexOf(p);
        let ssTotal = 0;
        ssTotal = `${p.prix}` * parseInt(`${p.quantite}`);
        
        const body = document.getElementById("corps");
        body.innerHTML += 
            `
                <tr>
                    <td scope="w-25">
                        <img src="${p.img}" class="img-thumbnail" width="200"/>
                    </td>
                    <td class="align-middle">${p.nom}</td>
                    <td class="align-middle">${p.objectif}</td>
                    <td class="align-middle qty">
                        <a class="diminuer" role="button">
                            <span class="minus bg-dark" data-index="${index}">-</span>
                        </a>
                        <span class="qte">${p.quantite}</span>
                        <a class="augmenter" role="button">
                            <span class="plus bg-dark" data-index="${index}">+</span>
                        </a>
                    </td>
                    <td class="align-middle">${convertNumberInPrice(`${ssTotal}`)}</td>
                    <td class="align-middle">
                        <a class="trash" role="button">
                            <i class="fas fa-trash-alt trash--color" data-index="${index}"></i>
                        </a>
                    </td>
                </tr>
            `
    });
    
    delAllElementPanier();
    calculTotal(panier);

    let delElement = document.getElementsByClassName("trash");
        
    for (let del of delElement) {
        del.addEventListener("click", delElementPanier);
    }

    let diminuer = document.getElementsByClassName("diminuer");

    for(let dim of diminuer) {
        dim.addEventListener("click", diminuerQuantite);
    }

    let augmenter = document.getElementsByClassName("augmenter");

    for(let aug of augmenter) {
        aug.addEventListener("click", augmenterQuantite);
    }

}