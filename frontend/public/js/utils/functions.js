// bien penser à supprimer les functions inutilisé

export function convertNumberInPrice(number) {
    let price = Intl.NumberFormat('fr-FR', 
    {
        style: 'currency',
        currency: 'EUR'
    }).format(number/100);
    
    return price;
}

export function cacheBasket() {
    if(JSON.parse(localStorage.getItem('produit')) !== null) {
        const notif = document.getElementById("notification");
        notif.innerText = JSON.parse(localStorage.getItem('produit')).length;
    } else {
        const notif = document.getElementById("notification");
        notif.innerText = 0;
    }
}

export function delAllElementPanier() {
    const delPanier = document.getElementById("panier");
    delPanier.addEventListener('click', e => {
        localStorage.clear();
        window.location.reload();
    });
}

export function calculTotal(value) {
    let totalValue = 0;
    value.forEach((camera) => {
        totalValue = totalValue + camera.prix * camera.quantite;
    });
    const total = document.getElementById("total");
    total.innerText += `${convertNumberInPrice(totalValue)}`;
    return total;
}

export function diminuerQuantite(value) {
    const diminuer = document.getElementById("diminuer");
    diminuer.addEventListener('click', e => {
        value.forEach((p) => {
            let newValeur = 0;
            console.log(p.quantite);
            newValeur = p.quantite - 1;
            
            const qte = document.getElementsByClassName("diminuer");
            const oldQte = document.createElement("span");
            const newQte = document.createElement("span");
            
            qte.removeChild(oldQte);
            console.log(newQte);
            newQte.innerHTML = `<span>${newValeur}</span>`;
            qte.appendChild(newQte);
        })
    });
}

// Affichage de tous les produits sur la page d'accueil
export function getAllElement(values) {
    cacheBasket();

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

export function getParameters() {
    let str = window.location.href;
    let url = new URL(str);
    let search_params = new URLSearchParams(url.search);
    if(search_params.has('_id')) {
        let id = search_params.get('_id');
        console.log(id);
        return id;
    }
}

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
    
    console.log(localStorage.length);
    let compteur = localStorage.length;

    // Initialisation de la variable produit
    const produit = [];
    const idObject = JSON.parse(localStorage.getItem('produit'));
    console.log(idObject);
    if(JSON.parse(localStorage.getItem('produit')) !== null) {
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
        
        if(JSON.parse(localStorage.getItem('produit')) === null) {
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
            console.log(produit);
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
            console.log(idObject);
            let sendStorage = JSON.stringify(idObject);
            localStorage.setItem('produit', sendStorage);
        }
    })   
}