import { startPage, flowersPage, aboutPage, contactPage, flowers, checkoutPage} from "./pages.js";


//hides homepage
function hideHomepage() {
    startPage.style.display = "none";
}

//hides flower categories page
function hideFlowers() {
    flowersPage.style.visibility = "hidden";
    flowersPage.style.opacity = "0";
}

//hides about page
function hideAbout() {
    aboutPage.style.display = "none";
}

//hides contact page
function hideContact() {
    contactPage.style.display = "none";
}

//hides products page
function hideProducts() {
    flowers.style.display = "none";

}

//hides shopping bag
function hideCheckout() {
    checkoutPage.style.display = "none";
}

export { hideHomepage, hideFlowers, hideAbout, hideContact, hideProducts, hideCheckout };
