let morpionComplet = false;
let caseColor = 0;
let gameStarting = false;
let tourJoueur;
let phraseJoueur = document.getElementsByClassName('joueur');
let laCase = document.getElementsByClassName('case1');
let case1Background;
let case2Background;
let case3Background;
let case4Background;
let case5Background;
let case6Background;
let case7Background;
let case8Background;
let case9Background;
let caseActuel;
let case1 = document.getElementById('case1');
let case2 = document.getElementById('case2');
let case3 = document.getElementById('case3');
let case4 = document.getElementById('case4');
let case5 = document.getElementById('case5');
let case6 = document.getElementById('case6');
let case7 = document.getElementById('case7');
let case8 = document.getElementById('case8');
let case9 = document.getElementById('case9');
let joueur = document.getElementsByClassName("joueur");
console.log(joueur);

function reinitialisation() {
    gameStarting = false;
    morpionComplet = false;
    caseColor = 0;
    case1.style.backgroundColor = "";
    case2.style.backgroundColor = "";
    case3.style.backgroundColor = "";
    case4.style.backgroundColor = "";
    case5.style.backgroundColor = "";
    case6.style.backgroundColor = "";
    case7.style.backgroundColor = "";
    case8.style.backgroundColor = "";
    case9.style.backgroundColor = "";
}
function gameStart() {
    gameStarting = true;
    tourJoueur = 0;
    console.log("Game start !");
    
}
function clicking() {
    if (gameStarting == true) {
        document.addEventListener('click', (e) => {
            let elementClass = e.target.className;
            if (elementClass == 'case') {
                let caseActuel = document.getElementById(e.target.id);
                if (tourJoueur == "0") {
                    if (caseActuel.style.backgroundColor=="") {
                        caseActuel.style.backgroundColor = "red";
                        console.log('Joueur rouge');
                        phraseJoueur.innerText = "Tour du joueur 1";
                        tourJoueur = 1;
                        caseColor += 1;
                        console.log(tourJoueur);
                    }
                    else {
                        console.log("Case déjà pris");
                    }
                    if (caseColor == 9) {
                        reinitialisation();
                    }
                }
                else {
                    if (caseActuel.style.backgroundColor=="") {
                        caseActuel.style.backgroundColor = "black";
                        console.log('Joueur noir');
                        phraseJoueur.innerText = "Tour du joueur 2";
                        tourJoueur = 0;
                        caseColor += 1;
                        console.log(tourJoueur);
                    }
                    else {
                        console.log("Case déjà pris");
                    }
                    if (caseColor == 9) {
                        reinitialisation();
                    }
                }
                verification();
            }
        });
    }
}
function verification() {
    case1Background = case1.style.backgroundColor;
    case2Background = case2.style.backgroundColor;
    case3Background = case3.style.backgroundColor;
    case4Background = case4.style.backgroundColor;
    case5Background = case5.style.backgroundColor;
    case6Background = case6.style.backgroundColor;
    case7Background = case7.style.backgroundColor;
    case8Background = case8.style.backgroundColor;
    case9Background = case9.style.backgroundColor;
    /*Vérification ligne*/
    if (case1Background=="red" && case2Background=="red" && case3Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
        gameStarting = false;
    }
    if (case1Background=="black" && case2Background=="black" && case3Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    if (case4Background=="red" && case5Background=="red" && case6Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case4Background=="black" && case5Background=="black" && case6Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    if (case7Background=="red" && case8Background=="red" && case9Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case7Background=="black" && case8Background=="black" && case9Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    /*Vérification colonne*/
    if (case1Background=="red" && case4Background=="red" && case7Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case1Background=="black" && case4Background=="black" && case7Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    if (case2Background=="red" && case5Background=="red" && case8Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case2Background=="black" && case5Background=="black" && case8Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    if (case3Background=="red" && case6Background=="red" && case9Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case3Background=="black" && case6Background=="black" && case9Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    /*Vérification diagonale*/
    if (case1Background=="red" && case5Background=="red" && case9Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case1Background=="black" && case5Background=="black" && case9Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
    if (case7Background=="red" && case5Background=="red" && case3Background=="red") {
        console.log("Les rouges gagnent");
        reinitialisation();
    }
    if (case7Background=="black" && case5Background=="black" && case3Background=="black") {
        console.log("Les noirs gagnent");
        reinitialisation();
    }
};