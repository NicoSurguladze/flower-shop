import { removeAllChildNodes } from "./bagItem.js";
import { hideCheckout } from "./hidePages.js";
import { showHomepage } from "./showPages.js";
import { clearBag, shoppingBag } from "./bag.js";

const postCheckoutDiv = document.createElement("div");
const loadingIcon = document.createElement("img");

//completes checkout and returns to homepage
function checkout() {
    if (shoppingBag.length == 0) {
        document.getElementById("checkout-content").setAttribute("id", "checkout-content-flash");
        setTimeout(() => {
            document.getElementById("checkout-content-flash").setAttribute("id", "checkout-content");
        }, 1000);
    } else {
        loadingAnimation();
        success();
        setTimeout(() => {
        hideCheckout();
        hideSuccess();
        showHomepage();
        clearBag();
    }, 9200);
    }
}

//creates loading animation
function loadingAnimation() {
    postCheckoutDiv.setAttribute("id", "post-checkout-div");
    document.getElementById("main").appendChild(postCheckoutDiv);
    loadingIcon.src = "./images/logo.png";
    postCheckoutDiv.appendChild(loadingIcon);
    setTimeout(() => {postCheckoutDiv.style.visibility = "visible"}, 100);
    setTimeout(() => {postCheckoutDiv.style.opacity = "1"}, 100);
}

//creates success message
function success() {
    setTimeout(() => {
        removeAllChildNodes(postCheckoutDiv);
        const success = document.createElement("h2");
        postCheckoutDiv.appendChild(success);
        success.innerHTML = "Success";
    }, 6200);
}

//hides success message
function hideSuccess() {
    document.getElementById("main").removeChild(postCheckoutDiv);
    removeAllChildNodes(postCheckoutDiv);
}
    


export { checkout };