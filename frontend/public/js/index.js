import {getAllElement} from './utils/functions';

// Je récupère toutes les valeurs sur la page d'accueil
fetch("http://localhost:3000/api/cameras") 
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((value) => {
        console.log(value);
        getAllElement(value);
    })
    .catch((err) => {
        throw new err;
    });
