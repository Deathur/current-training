let morpionComplet = 0;
let caseColor = 0;
let gameStarting = false;
let tourJoueur;
let phraseJoueur = document.querySelector(".joueur");
let caseActuel;
let case1Background;
let case2Background;
let case3Background;
let case4Background;
let case5Background;
let case6Background;
let case7Background;
let case8Background;
let case9Background;
let elementClass;
let player1Score;
let Player2Score;
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
let test = 0;


function reinitialisation() {
    phraseJoueur.innerText = "Tour du joueur ?";
    tourJoueur = 0;
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
    reinitialisation();
    gameStarting = true;
    tourJoueur = 0;
    console.log("Game start !");
    phraseJoueur.innerText = "Tour du joueur 1";
}

function clicking() {
    document.addEventListener('click', (e) => {
        elementClass = e.target.className;
        if (elementClass == 'case') {
            caseActuel = document.getElementById(e.target.id);
            fonctionnement();
        }
    });
    
}

function fonctionnement() {
    if (gameStarting == true) {
        switch (tourJoueur) {
            case 0:
                tourJoueur1();
                console.log('Tour du joueur 1')
                break;
            case 1:
                tourJoueur2();
                console.log('Tour du joueur 2')
                break;
        }
        verification();
        if (caseColor == 9) {
            gameStarting = false;
            reinitialisation()
        }
    }
    return
}

function tourJoueur1() {
    if (caseActuel.style.backgroundColor=="") {
        console.log('Je me transforme en rouge');
        caseActuel.style.backgroundColor = "red";
        phraseJoueur.innerText = "Tour du joueur 2"
        tourJoueur = 1;
        caseColor += 1;
    }
    else {
        console.log('Déjà pris');
    }
    console.log('tourJoueur1');
}

function tourJoueur2() {
    if (caseActuel.style.backgroundColor=="") {
        console.log('Je me transforme en noir');
        caseActuel.style.backgroundColor = "black";
        phraseJoueur.innerText = "Tour du joueur 1"
        tourJoueur = 0;
        caseColor += 1;
    }
    else {
        console.log('Déjà pris');
    } 
    console.log('tourJoueur2');
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
        gameStarting = false;
        reinitialisation();
    }
    if (case1Background=="black" && case2Background=="black" && case3Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case4Background=="red" && case5Background=="red" && case6Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case4Background=="black" && case5Background=="black" && case6Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case7Background=="red" && case8Background=="red" && case9Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case7Background=="black" && case8Background=="black" && case9Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    /*Vérification colonne*/
    if (case1Background=="red" && case4Background=="red" && case7Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case1Background=="black" && case4Background=="black" && case7Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case2Background=="red" && case5Background=="red" && case8Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case2Background=="black" && case5Background=="black" && case8Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case3Background=="red" && case6Background=="red" && case9Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case3Background=="black" && case6Background=="black" && case9Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    /*Vérification diagonale*/
    if (case1Background=="red" && case5Background=="red" && case9Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case1Background=="black" && case5Background=="black" && case9Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case7Background=="red" && case5Background=="red" && case3Background=="red") {
        console.log("Les rouges gagnent");
        gameStarting = false;
        reinitialisation();
    }
    if (case7Background=="black" && case5Background=="black" && case3Background=="black") {
        console.log("Les noirs gagnent");
        gameStarting = false;
        reinitialisation();
    }
}