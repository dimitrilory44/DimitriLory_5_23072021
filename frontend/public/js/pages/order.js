import {order, total} from '../utils/variables';
import {cacheBasket} from '../utils/functions';
import {displayTicket} from './composants/displayOrder';

(async () => {
    cacheBasket();
    // Je récupére les données envoyer sur localstorage
    displayTicket(order, total);
})();