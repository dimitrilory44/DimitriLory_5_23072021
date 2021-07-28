import { getParameters, getElementById } from "./utils/functions";

// Je récupère le paramètre id envoyer
const id = getParameters();

// Je récupère par l'id sur la page d'accueil
fetch("http://localhost:3000/api/cameras/" + id) 
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((value) => {
        console.log(value);
        getElementById(value);
    })
    .catch((err) => {
        throw new err;
    });

