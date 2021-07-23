// Je récupère toutes les valeurs sur la page d'accueil
fetch("http://localhost:3000/api/cameras") 
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((value) => {
        console.log(value);
        getAll(value);
    })
    .catch((err) => {
        throw new err;
    });

function getAll(values) {
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
                        <a href="#" class="btn btn-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>
        `
    }
}