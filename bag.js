import { products } from "./products.js";
import { getTotal } from "./total.js";
import { populatePanel } from "./bagItem.js";

let shoppingBag = [];

//add selected product to shopping bag
function addToBag(id) {
    let bagQuantity = getProductAmount(id);
    for (let i = 0; i < products.length; i++) {
        let productId = products[i].id;
        if (productId == id) {
            if (shoppingBag.length == 0) {
                products[i].quantity = bagQuantity;
                shoppingBag.push(products[i]);
            } else {
                const containsItem = shoppingBag.filter(item => item.id == id);
                if (containsItem.length > 0) {
                    let test = Number(containsItem[0].quantity);
                    test += Number(bagQuantity);
                    containsItem[0].quantity = test;
                } else {
                    products[i].quantity = bagQuantity;
                    shoppingBag.push(products[i]);
                    break;
                }
            }        
        }
    }
    showBagQuantity(shoppingBag);
    getTotal();
}

//get quantity of selected product
function getProductAmount(id) {
    return document.getElementById(id).innerHTML;
  
}

//calculate quantity of products in shopping bag
function calculateBagQuantity(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return arr.reduce((partialSum, a) => Number(partialSum) + Number(a.quantity), 0);
    }
}

//display quantity of products in shopping bag
function showBagQuantity(arr) {
    let quantity = calculateBagQuantity(arr);
    if (quantity == 0) {
        document.getElementById("bag-notification").style.display = "none";
    } else {
        document.getElementById("bag-notification").style.display = "block";
        document.getElementById("bag-quantity").innerHTML = quantity;
    }
}

//decrement quantity of selected product in shopping bag
function decrementBagQuantity(id) {
    const itemToDecrement = shoppingBag.filter(item => item.id == id);
    if (itemToDecrement[0].quantity > 1) {
        itemToDecrement[0].quantity --;
        populatePanel(shoppingBag);    
    }
}

//increment quantity of selected product in shopping bag
function incrementBagQuantity(id) {
    const itemToIncrement = shoppingBag.filter(item => item.id == id);
    itemToIncrement[0].quantity ++;
    populatePanel(shoppingBag);
}

//delete selected product from shopping bag
function deleteItem(id) {
    let index;
    for (let i = 0; i < shoppingBag.length; i++) {
            if (shoppingBag[i].id == id) {
                index = i;
            }        
    }
    shoppingBag.splice(index, 1);
    populatePanel(shoppingBag);
}

//delete all products from shopping bag
function clearBag() {
    shoppingBag = [];
    populatePanel(shoppingBag);
}

export { shoppingBag, addToBag, showBagQuantity, decrementBagQuantity, incrementBagQuantity, deleteItem, clearBag };