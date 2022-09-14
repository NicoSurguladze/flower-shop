
//creates navigation drop down list 
function createNavDropDown(arr) {
    for (let i = 0; i < arr.length; i++) {
        const dropdown = document.getElementById("dropdown-content");
        const link = document.createElement("a");
        link.setAttribute("id", "dropdown-content-link");
        link.setAttribute("onclick", `showFlowerFam('${arr[i].type}')`);
        link.innerHTML = arr[i].type;
        dropdown.appendChild(link);
    }
}

export { createNavDropDown };