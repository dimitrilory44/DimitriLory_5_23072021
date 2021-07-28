import {getAllElement} from '../utils/functions';
import {apiURL} from '../config';

// Je récupère toutes les valeurs sur la page d'accueil
fetch(`${apiURL}/api/cameras`) 
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