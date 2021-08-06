import {cacheBasket, convertNumberInPrice, delElementPanier, diminuerQuantite, augmenterQuantite, calculTotal, panier, sendOrder} from '../utils/functions';

cacheBasket();

if(panier === null || panier.length === 0) {
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
                <h4 class="label mr-5">Total</h4>
                <div id="total"></div>
            </div>

            <div id="accordion">
                <div class="d-flex justify-content-end mt-5">
                    <button id="valider" class="btn btn-primary collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Valider ma commande</button>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <h1 class="mb-3">Validation de ma commande</h1>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputNom">Nom</label>
                                <input type="text" class="form-control" id="inputNom" placeholder="Entrer un nom" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPrenom">Prenom</label>
                                <input type="text" class="form-control" id="inputPrenom" placeholder="Entrer un prenom" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputMail">Email</label>
                                <input type="email" class="form-control" id="inputMail" placeholder="Entrer un email" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputAddress">Adresse</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputCity">Ville</label>
                                <input type="text" class="form-control" id="inputCity" placeholder="Ex: Nantes" required>
                            </div>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required>
                            <label class="form-check-label" for="gridCheck">
                                Valider les conditions de vente
                            </label>
                        </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" id="send" class="btn btn-success">Commander</button>
                        </div>
                    </form>
                </div>
            </div>

        `;
    
    panier.forEach((p) => {
        let index = panier.indexOf(p);
        let ssTotal = 0;
        ssTotal = `${p.prix}` * parseInt(`${p.quantite}`);
        
        const body = document.getElementById("corps");
        body.innerHTML += 
            `
                <div class="d-flex justify-content-end">
                    <a class="trash" role="button">
                        <i class="fas fa-trash-alt trash--color" data-index="${index}"></i>
                    </a>
                </div>
                <div class="row d-flex mb-3">
                  <div class="col-lg-5 col-md-5 col-sm-5">
                    <img src="${p.img}" class="img-fluid img-thumbnail w-75"/>
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7 mt-3">
                    <div class="d-flex justify-content-between ">
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
                        <div class="d-flex justify-content-end price">${convertNumberInPrice(`${ssTotal}`)}</div>
                    </div>
                  </div>
                </div>
            `
    });
    
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

    let validation = document.getElementById("valider");

    validation.addEventListener("click", (e) => {
        validation.classList.add("d-none");
    })

    // Envoie donnée vers la base de données
    let send = document.getElementById("send");

    send.addEventListener("click", (e) => {
        e.preventDefault();
        let contact = {
            firstName: 'sdoifse',
            lastName: 'string',
            address: 'string',
            city: 'string',
            email: 'string'
        }
    
        let products = [];

        for(let produit of panier) {
            products.push(produit.id);
        }
        
        sendOrder(contact, products);
    })
}