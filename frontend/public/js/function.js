function convertNumberInPrice(number) {
    let price = Intl.NumberFormat('fr-FR', 
    {
        style: 'currency',
        currency: 'EUR'
    }).format(number/100);

    return price;
}