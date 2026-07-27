
// =====================================
// MOBILE MENU
// =====================================


const menu = document.getElementById("menu");

const nav = document.getElementById("nav");



if(menu && nav){


menu.addEventListener("click",()=>{


nav.classList.toggle("active");


});


}








// =====================================
// CLOSE MENU WHEN LINK CLICKED
// =====================================


const links = document.querySelectorAll("nav a");


links.forEach(link=>{


link.addEventListener("click",()=>{


if(nav){

nav.classList.remove("active");

}


});


});








// =====================================
// ANIMATED COUNTERS
// =====================================


const counters =
document.querySelectorAll(".counter");



counters.forEach(counter=>{


counter.innerText="0";



const updateCounter=()=>{


const target =
Number(counter.getAttribute("data-target"));



const current =
Number(counter.innerText);



const increment =
target / 100;



if(current < target){


counter.innerText =
Math.ceil(current + increment);



setTimeout(updateCounter,30);


}

else{


counter.innerText = target + "+";


}



};



updateCounter();



});








// =====================================
// CONTACT FORM
// =====================================


const contactForm =
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener("submit",
function(e){


e.preventDefault();



alert(

"Thank you for contacting Biotimb. Our team will get back to you shortly."

);



contactForm.reset();



});


}








// =====================================
// SCROLL ANIMATION
// =====================================


const cards =
document.querySelectorAll(".card");



window.addEventListener("scroll",()=>{


cards.forEach(card=>{


const position =
card.getBoundingClientRect().top;



const screen =
window.innerHeight;



if(position < screen - 100){


card.style.opacity="1";

card.style.transform="translateY(0)";


}



});


});








// Initial card animation state

cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(30px)";

card.style.transition="0.6s";


});