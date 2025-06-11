let addText = document.querySelector('.AjoutTexte');
let texte1 = document.querySelector('.Texte1');
let addRouge = document.querySelector('.AjoutRouge');
let texte2 = document.querySelector('.Texte2');
let menu = document.querySelector('.AjoutUl');
let ulLi = document.querySelector('.menu');
let menu2 = document.querySelector('.RetraitUl');
let bouton1 = document.getElementById('bouton1');
let bouton2 = document.getElementById('bouton2');
let bouton3 = document.getElementById('bouton3');
let bouton = document.querySelectorAll('.bouton');


addText.addEventListener('click', () => {
    texte1.innerText = "Hello, world!";
})

addRouge.addEventListener('click', () => {
    texte2.style.color = "red";
})

menu.addEventListener('click', () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('Nouvel élément'));
    ulLi.appendChild(li);
})

menu2.addEventListener('click', () => {
    let ulLi2 = document.querySelector('.menu2');
    ulLi2.removeChild(ulLi2.firstElementChild);
})

function gestionnaireEvenement() {
    bouton1.addEventListener('click', () => {
        console.log(bouton1.id);
    })
    bouton2.addEventListener('click', () => {
        console.log(bouton2.id);
    })
    bouton3.addEventListener('click', () => {
        console.log(bouton3.id);
    })
}
gestionnaireEvenement();