import {cacheBasket} from '../utils/functions';

cacheBasket();

const order = JSON.parse(localStorage.getItem("order")) || [];

console.log(order);