import { roses, peonies, tulips } from "./flowers.js";
import { flowersPage } from "./pages.js"

const famArr = [];
famArr.push(roses, peonies, tulips);

//creates flower category
function createFlowersFam(famArr) {
    for(let i = 0; i < famArr.length; i++) {
        const flowersFam = document.createElement("div");
        flowersFam.setAttribute("id", "flowers-fam");
        flowersFam.setAttribute("onclick", `showFlowerFam('${famArr[i].type}')`)
        flowersPage.appendChild(flowersFam);
        const flowerFamImg = document.createElement("img");
        const flowerFamTitle = document.createElement("h3");
        flowerFamTitle.innerHTML = famArr[i].type;
        flowerFamImg.src = famArr[i].img;
        flowersFam.appendChild(flowerFamTitle);
        flowersFam.appendChild(flowerFamImg);
    }
}

export { famArr, createFlowersFam};