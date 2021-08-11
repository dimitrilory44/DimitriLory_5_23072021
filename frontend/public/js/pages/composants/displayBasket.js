import {sendOrder} from '../../service/api';

import {panier} from '../../utils/variables';
import {calculTotal, convertNumberInPrice, delElementPanier, augmenterQuantite, diminuerQuantite} from '../../utils/functions';
import {verificationFormulaire} from '../../utils/verifFormulaire';

// Bloc panier lorsqu'il n'y a pas d'éléments
export function noElementInBasket() {
    const newElmt = document.createElement("section");
    const elmt = document.getElementById("main");

    newElmt.classList.add('jumbotron', 'd-flex', 'p-5', 'mb-4', 'bg-light', 'mt-3', 'flex-column');
   
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
}

// Bloc panier lorsqu'il y a des éléments
export function elementInBasket() {
    const sectionPanier = document.createElement("section");
    const elmt = document.getElementById("main");

    sectionPanier.classList.add("my-5", "align-middle");
    elmt.appendChild(sectionPanier);

    sectionPanier.innerHTML = 
        `   
            <div class="d-flex mb-3">
                <h1>Mon panier</h1>
            </div>

            <div id="corps" class="card p-3">
            </div>

            <div class="d-flex justify-content-end mt-3">
                <h4 class="label">Total</h4>
                <div id="total"></div>
            </div>
        `;
    
    panier.forEach((p) => {
        let index = panier.indexOf(p);
        let ssTotal = 0;
        ssTotal = `${p.prix}` * parseInt(`${p.quantite}`);
        let total = convertNumberInPrice(`${ssTotal}`);
        
        const body = document.getElementById("corps");
        body.innerHTML += 
            `
                <div class="d-flex justify-content-end">
                    <a class="trash" role="button">
                        <i class="bi bi-trash-fill trash--color" data-index="${index}"></i>
                    </a>
                </div>
                <div class="row d-flex mb-3">
                  <div class="col-lg-5 col-md-5 col-sm-5">
                    <img src="${p.img}" class="img-fluid img-thumbnail w-75" alt="Image ${p.nom}"/>
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7 mt-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start flex-column descriptif">
                            <a role="button" href="produit.html?_id=${p.id}">
                                <h3>${p.nom}</h3>
                            </a>
                            <span>Ref : ${p.id}</span>
                            <span class="mb-3">Objectif : ${p.objectif}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-5">
                        <div class="qty d-flex justify-content-start">
                            <a class="diminuer" role="button">
                                <span class="minus bg-dark" data-index="${index}">-</span>
                            </a>
                            <span class="qte">${p.quantite}</span>
                            <a class="augmenter" role="button">
                                <span class="plus bg-dark" data-index="${index}">+</span>
                            </a>
                        </div>
                        <div class="d-flex justify-content-end price">${total}</div>
                    </div>
                  </div>
                </div>
            `
    });
    
    calculTotal(panier);

    // Traitement sur les commandes
    const delElement = document.getElementsByClassName("trash");
        
    for (let del of delElement) {
        del.addEventListener("click", delElementPanier);
    }

    const diminuer = document.getElementsByClassName("diminuer");

    for(let dim of diminuer) {
        dim.addEventListener("click", diminuerQuantite);
    }

    const augmenter = document.getElementsByClassName("augmenter");

    for(let aug of augmenter) {
        aug.addEventListener("click", augmenterQuantite);
    }

    // section formulaire commande
    const accordion = document.createElement("section");
    accordion.classList.add("accordion");
    elmt.appendChild(accordion);

    accordion.innerHTML = 
        `
            <div class="d-flex justify-content-end mt-5">
            <button id="valider" class="btn btn-primary collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Valider ma commande</button>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent=".accordion">
                <h1 class="mb-3">Validation de ma commande</h1>
                <form id="orderForm">
                    <div class="row">
                        <div class="form-group col-md-4 mb-3">
                            <label id="inputNom" for="inputNom">Nom</label>
                            <input type="text" class="form-control" id="nom" placeholder="Entrer un nom">
                            <small id="errorNom"></small>
                        </div>
                        <div class="form-group col-md-4 mb-3">
                            <label id="inputPrenom" for="inputPrenom">Prenom</label>
                            <input type="text" class="form-control" id="prenom" placeholder="Entrer un prenom">
                            <small id="errorPrenom"></small>
                        </div>
                        <div class="form-group col-md-4 mb-3">
                            <label id="inputMail" for="inputMail">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Entrer un email">
                            <small id="errorMail"></small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6 mb-3">
                            <label id="inputAddress" for="inputAddress">Adresse</label>
                            <input type="text" class="form-control" id="adresse" placeholder="Ex : 30 rue Orinoco">
                            <small id="errorAdresse"></small>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label id="inputCity" for="inputCity">Ville</label>
                            <input type="text" class="form-control" id="ville" placeholder="Ex : Nantes">
                            <small id="errorCity"></small>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" id="send" class="btn btn-success">Commander</button>
                    </div>
                </form>
            </div>
        `
    ;

    // Enclenchement de la commande
    const validation = document.getElementById("valider");

    validation.addEventListener("click", () => {
        validation.classList.add("d-none");
        
    });

    const emailReg = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;

    const send = document.getElementById("send");

    send.addEventListener('click', (e) => {
        e.preventDefault();
            let contact = {
                firstName: document.getElementById("prenom").value,
                lastName: document.getElementById("nom").value,
                address: document.getElementById("adresse").value,
                city: document.getElementById("ville").value,
                email: document.getElementById("email").value
            }
        
            let products = [];
            if(emailReg.test(contact.email) 
                & contact.firstName !== ""
                & contact.lastName !== ""
                & contact.address !== ""
                & contact.city !== "") {
        
                for(let produit of panier) {
                    products.push(produit.id);
                }
                
                sendOrder(contact, products);
            } else {
                verificationFormulaire(emailReg, contact);
            }
            
    });
}