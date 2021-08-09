import {getAllProduits} from '../service/api';

import {cacheBasket} from '../utils/functions';
import {getAllElement} from './composants/displayIndex';

// Définition et appel d’une fonction anonyme, pour permettre l’usage de await
// Cette fonction appelle les différents composants de manière asynchrone
(async () => {
    cacheBasket();
    const produits = await getAllProduits();
    getAllElement(produits);
})();