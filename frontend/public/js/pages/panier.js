import {panier} from '../utils/variables';
import {cacheBasket} from '../utils/functions';
import {noElementInBasket, elementInBasket} from './composants/displayBasket';

// Fonction anonyme qui permet de verifier la quantité d'élément dans le produit et d'afficher les fonctions de remplissage correspondant
(async () => {
    cacheBasket();
    if(panier === null || panier.length === 0) {
        return noElementInBasket();
    } else {
        return elementInBasket();
    }
})();