export const panier = JSON.parse(localStorage.getItem('produit'));
export const total = JSON.parse(localStorage.getItem("total")) || 0;
export const order = JSON.parse(localStorage.getItem("order")) || [];