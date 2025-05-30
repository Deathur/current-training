let morpionComplet = 0;
let tourJoueur = 0;
let laCase = document.getElementById("case");
console.log(laCase);
let caseActuel;
let joueur = document.getElementsByClassName("joueur");
console.log(joueur);

function reinitialisation() {

}
function gameStart() {
    joueur.innerText = 'Tour du joueur 2';
    if (tourJoueur == 0) {
        laCase.addEventListener('click', () => {
            laCase.style.backgroundImage = "";
        })
    }
    else {
        
    };
}
