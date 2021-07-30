// bien penser à supprimer les functions inutilisé

function convertNumberInPrice(number) {
    let price = Intl.NumberFormat('fr-FR', 
    {
        style: 'currency',
        currency: 'EUR'
    }).format(number/100);

    return price;
}

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

    // Récupération de l'image du produit
    const image = document.getElementById('image');
    image.innerHTML = `<img class="card-img-top" src="${value.imageUrl}"/>`;
    
    // Récupération des options objectif
    const option = document.getElementById('options');
    for(let opt of value.lenses) {
        option.innerHTML += `<option value="${opt}">${opt}</option>`;
    }

    const quantite = document.getElementById('quantite');
    for(let qut = 1; qut <= 5; qut++ ) {
        quantite.innerHTML += `<option value="${qut}">${qut}</option>`;
    }
    
    const price = document.querySelector('.prix span');
    const priceConvert = convertNumberInPrice(`${value.price}`);
    price.textContent = `${priceConvert}`;

    quantite.addEventListener('change', (event) => {
        let newPrice = 0;
        const price = document.querySelector('.prix span');
        newPrice = `${value.price}` * parseInt(`${event.target.value}`);
        const priceConvert = convertNumberInPrice(`${newPrice}`);
        price.textContent = `${priceConvert}`;
    });

    const elmt = document.getElementById('goToBasket');
    elmt.addEventListener('click', e => {
        e.preventDefault();
        const nomAlert = document.querySelector("#alert span strong");
        nomAlert.textContent = `${value.name}`;
        const alert = document.getElementById("alert");
        alert.classList.replace("no-show", "show");
    })
}