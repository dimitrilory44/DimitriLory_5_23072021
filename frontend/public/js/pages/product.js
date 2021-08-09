import {getOneElementWithId} from '../service/api';

import {cacheBasket, getParameters} from "../utils/functions";
import {getElementById} from './composants/displayProduct';

(async function() {
    cacheBasket();
    const product_id = getParameters();
    const productsById = await getOneElementWithId(product_id);
    getElementById(productsById);
})();