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
let i = 1;
let result;

addText.addEventListener('click', () => {
    texte1.innerText = "Hello, world!";
})

addRouge.addEventListener('click', () => {
    texte2.style.color = "red";
})

menu.addEventListener('click', () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('Element ' + i));
    i++;
    ulLi.appendChild(li);
})

menu2.addEventListener('click', () => {
    if (i > 1){
        let ulLi = document.querySelector('.menu');
        ulLi.removeChild(ulLi.lastElementChild);
        i--;
    }
})
bouton1.addEventListener('click', () => {
    result = bouton1.id;
    console.log(gestionnaireEvenement(result));
})
bouton2.addEventListener('click', () => {
    result = bouton2.id;
    console.log(gestionnaireEvenement(result));
})
bouton3.addEventListener('click', () => {
    result = bouton3.id;
    console.log(gestionnaireEvenement(result));
})

function gestionnaireEvenement(patate) {
    return patate;
}