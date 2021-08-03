import {getElementById} from "../utils/functions";
import {apiURL, id} from '../config';

// Je récupère par l'id sur la page d'accueil
fetch(`${apiURL}/api/cameras/${id}`) 
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((value) => {
        getElementById(value);
    })
    .catch((err) => {
        throw new err;
    });