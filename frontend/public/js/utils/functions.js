function convertNumberInPrice(number) {
    let price = Intl.NumberFormat('fr-FR', 
    {
        style: 'currency',
        currency: 'EUR'
    }).format(number/100);

    return price;
}

function getValueOption(value) {
    let option = document.getElementById('options');
    option.innerHTML = 
        `
            <option>${value}</option>
        `
    
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
                        <a href="pages/produit.html?_id=${value._id}" class="btn btn-outline-secondary">Descriptif du produit</a>
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
    let element = document.getElementById('produit');
    let price = convertNumberInPrice(`${value.price}`);
    element.innerHTML = 
        `
            <div class="card mb-5">
                <div class="row m-3">
                    <div class="col-lg-5 d-flex">
                        <img class="card-img-top" src="${value.imageUrl}"/>
                    </div>
                    <div class="col-lg-7 py-3 pr-5">
                        <div class="d-flex ">
                            <h5 class="card-title">${value.name}</h5>
                            <div class="ml-auto align-items-center"><h5><strong>${price}</strong></h5></div>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="options">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <p class="card-text">${value.description}</p>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Quantité :</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <a href="" class="btn btn-outline-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>
        `
}
