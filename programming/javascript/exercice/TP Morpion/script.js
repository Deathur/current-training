let morpionComplet = false;
let gameStarting = false;
let tourJoueur;
let laCase = document.getElementsByClassName('case1');
console.log(laCase);
let caseActuel;
let joueur = document.getElementsByClassName("joueur");
console.log(joueur);

function reinitialisation() {

}
function gameStart() {
    gameStarting = true;
    tourJoueur = 0;
    console.log("Game start !");
    
}
function clicking() {
    console.log(gameStarting);
            document.addEventListener('click', (e) => {
                let elementClass = e.target.className;
                if (elementClass == 'case') {
                    console.log(elementClass);
                    let caseActuel = document.getElementById(e.target.id);
                    console.log(caseActuel);
                    if (tourJoueur == "0") {
                        caseActuel.style.backgroundColor = "red";
                        console.log('Joueur rouge');
                        tourJoueur = 1;
                        console.log(tourJoueur);
                    }
                    else {
                        caseActuel.style.backgroundColor = "black";
                        console.log('Joueur noir');
                        tourJoueur = 0;
                        console.log(tourJoueur);
                    }
                }
            });
    }
function verification() {

};