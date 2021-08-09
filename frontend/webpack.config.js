const path = require('path');

module.exports = {
    devServer: {
        port: 5000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
        }
    },
    mode: "production",
    entry: {
        index: [
            "./public/js/pages/index.js"
        ],
        produit: [
            "./public/js/pages/product.js"
        ],
        panier: [
            "./public/js/pages/panier.js"
        ],
        commande: [
            "./public/js/pages/order.js"
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};