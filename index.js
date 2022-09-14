import { famArr } from "./createFlowerFamily.js"
import { createNavDropDown } from "./navigation.js";
import { createFlowersFam } from "./createFlowerFamily.js";
import { showCheckout, showFlowerFam, showContact, showAbout, showFlowers, showHomepage } from "./showPages.js";
import { decrementProduct, incrementProduct, } from "./products.js";
import { addToBag, decrementBagQuantity, incrementBagQuantity, deleteItem, clearBag } from "./bag.js";
import { hideCheckout } from "./hidePages.js";
import { checkout } from "./checkout.js";



//creates flower categories
createFlowersFam(famArr);

//creates navigation drop down list for flower categories
createNavDropDown(famArr);

//shows pages
window.showHomepage = showHomepage;
window.showFlowers = showFlowers;
window.showAbout = showAbout;
window.showContact = showContact;
window.showFlowerFam = showFlowerFam;
window.showCheckout = showCheckout;

//hides checkout page
window.hideCheckout = hideCheckout;

//increases/decreases product quantity to add to bag
window.decrementProduct = decrementProduct;
window.incrementProduct = incrementProduct;

//shopping bag 
window.addToBag = addToBag;
window.decrementBagQuantity = decrementBagQuantity;
window.incrementBagQuantity = incrementBagQuantity;
window.deleteItem = deleteItem;
window.clearBag = clearBag;

//completes checkout and returns to home page
window.checkout = checkout;





