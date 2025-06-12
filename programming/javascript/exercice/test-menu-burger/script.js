let iconeBurger = document.querySelector('.menu-hamburger');
let menuBurger = document.querySelector('.menu-liste');
/*
menuBurger.style.display = "none";
let affichageMenu = menuBurger.style.display;
iconeBurger.addEventListener('click', () => {
    if (menuBurger.style.display == "none") {
        menuBurger.style.display = "block";
    }
    else {
        menuBurger.style.display = "none";
    }
})
*/

iconeBurger.addEventListener('click', () => {
    menuBurger.classList.toggle("menu-visible");
})
