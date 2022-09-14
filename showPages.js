import { startPage, contactPage, aboutPage, flowersPage, flowers, checkoutPage } from "./pages.js";
import { hideHomepage, hideFlowers, hideAbout, hideContact, hideProducts  } from "./hidePages.js";
import { createProducts } from "./products.js";
import { populatePanel } from "./bagItem.js";
import { shoppingBag } from "./bag.js";

//shows homepage
function showHomepage() {
    startPage.style.display = "flex";
    startPage.style.visibility = "visible";
    startPage.style.opacity = "1";
    hideFlowers();
    hideAbout();
    hideContact();
    hideProducts();
} 

//shows flower categories page
function showFlowers() {
    flowersPage.style.visibility = "visible";
    flowersPage.style.opacity = "1";
    startPage.style.visibility = "hidden";
    startPage.style.opacity = "0";
    hideAbout();
    hideContact();
    hideProducts();
}

//shows about page
function showAbout() {
    aboutPage.style.display = "flex";
    flowersPage.style.transition = "all 1s linear 0.1s";
    hideHomepage();
    hideFlowers();
    hideContact();
    hideProducts();
}

//shows contact page
function showContact() {
    contactPage.style.display = "flex";
    flowersPage.style.transition = "all 1s linear 0.1s";
    hideHomepage();
    hideFlowers();
    hideAbout();
    hideProducts();
}

//shows selected products page
function showFlowerFam(type) {
    hideFlowers();
    hideHomepage();
    hideAbout();
    hideContact();
    flowers.style.display = "flex";
    document.getElementById("flowers-title").innerHTML = type;
    createProducts(type);
}

//shows shopping bag
function showCheckout() {
    checkoutPage.style.display = "flex";
    populatePanel(shoppingBag);
}





export { showCheckout, showFlowerFam, showContact, showAbout, showFlowers, showHomepage };