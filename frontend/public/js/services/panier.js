import {cacheBasket, convertNumberInPrice, delAllElementPanier, diminuerQuantite, calculTotal} from '../utils/functions';

cacheBasket();

if(JSON.parse(localStorage.getItem('produit')) === null) {
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
    let panier = JSON.parse(localStorage.getItem('produit'));
    console.log(panier);

    const newElmt = document.createElement("section");
    const elmt = document.getElementById("main");

    newElmt.classList.add("container", "my-3", "align-middle");
    elmt.appendChild(newElmt);

    newElmt.innerHTML = 
        `   
            <div class="d-flex justify-content-end mb-3">
                <button id="panier" class="btn btn-outline-danger">Vider mon panier</button>
            </div>

            <table class="table table-hover">
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
        const priceConvert = convertNumberInPrice(`${p.prix}`);
        let ssTotal = 0;
        ssTotal = `${p.prix}` * parseInt(`${p.quantite}`);
        const ssTotalConvert = convertNumberInPrice(`${ssTotal}`);
        let total = 0;
        total += ssTotal;
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
                        <a id="diminuer">
                            <span class="minus bg-dark">-</span>
                        </a>
                        <span>${p.quantite}</span>
                        <a id="augmenter">
                            <span class="plus bg-dark">+</span>
                        </a>
                    </td>
                    <td class="align-middle">${ssTotalConvert}</td>
                    <td class="align-middle">
                        <a>
                            <i class="fas fa-trash-alt trash--color"></i>
                        </a>
                    </td>
                </tr>
            `
        })
    calculTotal(panier);

    delAllElementPanier();
    diminuerQuantite(panier);
}