import {order, total} from '../utils/variables';
import {displayTicket} from './composants/displayOrder';

(async () => {
    // Je récupére les données envoyées sur localstorage
    displayTicket(order, total);
})();