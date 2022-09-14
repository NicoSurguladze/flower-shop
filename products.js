import { redRose, whiteRose, pinkRose, redPeonies, whitePeonies, pinkPeonies, redTulip, yellowTulip, purpleTulip } from "./flowers.js";
import { removeAllChildNodes } from "./bagItem.js";

//create array of products
let products = [];
products.push(redRose, whiteRose, pinkRose, redPeonies, whitePeonies, pinkPeonies, redTulip, yellowTulip, purpleTulip);

let product;
let productName;
let productPrice;
let productImg;
let incrementDiv;
let decrement;
let amount;
let increment;
let addToBag;

//creates product template
function createProductTemplate(id) {
    product = document.createElement("div");
    productName = document.createElement("h4");
    productImg = document.createElement("img");
    productPrice = document.createElement("h5");
    incrementDiv = document.createElement("div");
    decrement = document.createElement("button");
    amount = document.createElement("h6");
    increment = document.createElement("button");
    addToBag = document.createElement("button");
    product.setAttribute("id", "product");
    incrementDiv.setAttribute("id", "increment-container");
    addToBag.setAttribute("id", "add-to-bag-btn");
    addToBag.setAttribute("onclick", `addToBag(${id})`);
    amount.setAttribute("id", id);
    increment.setAttribute("onclick", `incrementProduct(${id})`);
    decrement.setAttribute("onclick", `decrementProduct(${id})`);
    document.getElementById("product-container").appendChild(product);
    product.appendChild(productName);
    product.appendChild(productImg);
    product.appendChild(productPrice);
    product.appendChild(incrementDiv);
    incrementDiv.appendChild(decrement);
    decrement.innerHTML = "-";
    incrementDiv.appendChild(amount);
    amount.innerHTML = 1;
    incrementDiv.appendChild(increment);
    increment.innerHTML = "+";
    product.appendChild(addToBag);
    addToBag.innerHTML = "Add to bag";
}

//assings product info to product template
function createProducts(type) {
    removeAllChildNodes(document.getElementById("product-container"));
    const productsToShow = products.filter(product => product.type === type);
    for (let i = 0; i < productsToShow.length; i++) {
            let productId = productsToShow[i].id; 
            createProductTemplate(productId);
            productName.innerHTML = `${productsToShow[i].color} ${productsToShow[i].type}`;
            productPrice.innerHTML = productsToShow[i].price;
            productImg.src = productsToShow[i].img
    }
}

//increases product quantity 
function incrementProduct(id) {
    document.getElementById(id).innerHTML++;
}

//decreases product quantity
function decrementProduct(id) {
    if (document.getElementById(id).innerHTML > 1) {
        document.getElementById(id).innerHTML--;
    }
}

export { products, createProductTemplate, createProducts, decrementProduct, incrementProduct };