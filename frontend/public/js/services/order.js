import {cacheBasket} from '../utils/functions';
import {apiURL} from '../config';

cacheBasket();

export const order = JSON.parse(localStorage.getItem("order"));

export async function sendOrder(contact, products) {
    fetch(`${apiURL}/api/cameras/order`, {
        method: "POST",
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({contact, products})
    })
    .then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
    .then(function(value) {
         localStorage.setItem("order", JSON.stringify(value));
         document.location.href = "order.html";
    });
}

console.log(order);