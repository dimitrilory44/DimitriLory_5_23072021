import {cacheBasket, convertNumberInPrice, contactCommande, finCommande} from '../utils/functions';

cacheBasket();

const order = JSON.parse(localStorage.getItem("order")) || [];
const total = JSON.parse(localStorage.getItem("total")) || 0;

contactCommande(order);

const ref = document.querySelector("#reference strong");
ref.innerText = `${order.orderId}`;

const totalCommande = document.querySelector(".totalCommande strong");
totalCommande.innerText = `${convertNumberInPrice(total)}`;;

finCommande();