// let p = document.getElementById("intro1"); //accessing
// console.log(p);
// console.log(p.textContent);
// p.textContent = "this is demo paragraph explainig the use of getElmentById"; //manipulating
// console.log(p.textContent);

// let p = document.querySelector("#intro");
// console.log(p);

// let p2 = document.querySelector(".about-us");
// console.log(p2);
// let h2 = document.querySelector("h2");
// console.log(h2.textContent);
// h2.textContent = "Welcome to our bank";

// let h1 = document.querySelector("h1");
// console.log(h1.innerHTML);
// h1.innerHTML = `<b>We have the best loan offer for you <b> `;
// console.log(h1.innerHTML);

// ===================Changing Attribute & Style Dynamically===========

// ****** accessing element and accessing value
// let input = document.querySelector("#fname");
// input.value = "mark";
// console.log(fName);

// adding style on perticular element

// let bannerDiv = document.querySelector(".home-page-banner");
// bannerDiv.style.backgroundColor = "#FDEBD0";
// bannerDiv.style.color = "#282828";

// adding dynamic add or remove css class from html element
let bannerDiv = document.querySelector(".home-page-banner");
console.log(bannerDiv);
bannerDiv.classList.remove("home-page-banner");
bannerDiv.classList.add("home-page-banner");

let seletedTab = "home-page";
function render(seletedTab) {
    switch(){
         
    }
}
