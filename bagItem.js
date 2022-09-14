import { getItemPrice, getTotal } from "./total.js";
import { shoppingBag, showBagQuantity } from "./bag.js";

let panelParent = document.getElementById("checkout-content");
let bagItem;
let panelInfo;
let panelImg;
let panelTitle;
let panelPrice;
let panelIncDec;
let decDiv;
let dec;
let incDecQuanDiv;
let incDecQuan;
let incDiv;
let inc;
let deleteIconDiv;
let deleteIcon;
let panelTotalDiv;
let panelTotal;


//create product template panel in shopping bag
function createBagItem(id) {
    //create elements
    bagItem = document.createElement("div");
    panelInfo = document.createElement("div");
    panelImg = document.createElement("img");
    panelTitle =document.createElement("h4");
    panelPrice = document.createElement("p");
    panelIncDec = document.createElement("div");
    decDiv = document.createElement("div");
    dec = document.createElement("p");
    incDecQuanDiv = document.createElement("div");
    incDecQuan = document.createElement("p");
    incDiv = document.createElement("div");
    inc = document.createElement("p");
    deleteIconDiv = document.createElement("div");
    deleteIcon = document.createElement("img");
    panelTotalDiv = document.createElement("div");
    panelTotal = document.createElement("h6");

    //set attributes
    bagItem.setAttribute("id", "product-panel");
    panelInfo.setAttribute("id", "product-info");
    panelIncDec.setAttribute("id", "panel-inc-dec");
    decDiv.setAttribute("id", "dec");
    decDiv.setAttribute("onclick", `decrementBagQuantity(${id})`);
    incDecQuanDiv.setAttribute("id","quantity");
    incDiv.setAttribute("id", "inc");
    incDiv.setAttribute("onclick", `incrementBagQuantity(${id})`);
    deleteIconDiv.setAttribute("id", "delete-icon");
    deleteIcon.setAttribute("onclick", `deleteItem(${id})`);
    panelTotalDiv.setAttribute("id", "panel-total");

    //append children
    panelParent.appendChild(bagItem);
    bagItem.appendChild(panelInfo);
    panelInfo.appendChild(panelImg);
    panelInfo.appendChild(panelTitle);
    panelInfo.appendChild(panelPrice);
    bagItem.appendChild(panelIncDec);
    panelIncDec.appendChild(decDiv);
    decDiv.appendChild(dec);
    panelIncDec.appendChild(incDecQuanDiv);
    incDecQuanDiv.appendChild(incDecQuan);
    panelIncDec.appendChild(incDiv);
    incDiv.appendChild(inc);
    bagItem.appendChild(deleteIconDiv);
    deleteIconDiv.appendChild(deleteIcon);
    bagItem.appendChild(panelTotalDiv);
    panelTotalDiv.appendChild(panelTotal);

    //assign values to elements
    dec.innerHTML = "-";
    inc.innerHTML = "+";
    deleteIcon.src = "./images/delete-icon.png";
}

//assign product info to panels in shopping bag
function populatePanel(arr) {
    showBagQuantity(shoppingBag);
    removeAllChildNodes(document.getElementById("checkout-content"));
    if (arr.length == 0) {
        document.getElementById("checkout-content").innerHTML = "Bag empty";
        document.getElementById("total").innerHTML = "$0.00";
    } else {
        for (let i = 0; i < arr.length; i++) {
            createBagItem(arr[i].id);
            panelImg.src = arr[i].img;
            panelTitle.innerHTML = `${arr[i].color} ${arr[i].type}`;
            panelPrice.innerHTML = arr[i].price;
            incDecQuan.innerHTML = arr[i].quantity;
            panelTotal.innerHTML = getItemPrice(arr[i].price, arr[i].quantity);
            document.getElementById("total").innerHTML = getTotal();
        }
    }
}

//removes all child nodes from selected parent
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



export { shoppingBag, populatePanel, removeAllChildNodes };