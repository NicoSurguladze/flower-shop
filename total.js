import { shoppingBag } from "./bag.js";

//calculates total price of product and returns as a string with currency assigned
function getItemPrice(itemPrice, quantity) {
    const amount = itemPrice.match(/\d/g).join('') / 100;
    const currency = itemPrice.match(/[^\d,.]/g).join('');
    const num = (Math.round((amount * quantity) * 100) / 100).toString();
    const itemTotal = addZeroes(num); 
    return `${currency}${itemTotal}`;
}

//adds decimal zeroes to product price
function addZeroes(num) {
        let value = Number(num);      
        let res = num.split(".");     
        if(res.length == 1 || res[1].length < 3) { 
            value = value.toFixed(2);
        }
    return value;
}

//calculates and returns total price of all products in shopping bag
function getTotal() {
    let num = 0;
    let currency;
    let total;
    for (let i = 0; i < shoppingBag.length; i++) {
        const amount = shoppingBag[i].price.match(/\d/g).join('') / 100;
        currency = shoppingBag[i].price.match(/[^\d,.]/g).join('');

        num += (amount * shoppingBag[i].quantity);
        const numToString = (Math.round(num * 100) / 100).toString();
        total = addZeroes(numToString);
    }
    return `${currency}${total}`;
}

export { getItemPrice, addZeroes, getTotal };
