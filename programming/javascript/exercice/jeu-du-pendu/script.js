var regmotADeviner = /^[a-z ]+$/i;
var regWhiteSpace = /^s+$/;

let motADeviner;
let tabADeviner;
let longueur;
let tabComplet;
let enJeu = false;
let propositionLettre;
let errorCount = 0;
let errorVerify = false;
let afficherMotDeviner = document.querySelector(".MotDeviner");
let lettreDejaPropose = [];
let afficherLettrePropose = document.querySelector(".lettrePropose");
let dejaPropose = false;
let afficherError = document.querySelector(".error");
let boutonCommencer = document.querySelector(".StartGame");
let boutonDeviner = document.querySelector(".Thinking");
boutonCommencer.addEventListener("click", commencerJeu);
boutonDeviner.addEventListener("click", verification);

let barreDeVie = document.querySelector('.border2')



function commencerJeu() {
  if (enJeu == false) {
    motADeviner = prompt("Choississez un mot à deviner").toUpperCase();
    if (motADeviner == null || !regmotADeviner.test(motADeviner) || regWhiteSpace.test(motADeviner)) {
      return;
    }
    barreDeVie.style.width = "100%";
    barreDeVie.style.backgroundColor = "green";
    tabADeviner = motADeviner.split("");
    longueur = tabADeviner.length;
    tabComplet = new Array(longueur).fill("_");
    afficherMotDeviner.textContent = tabComplet.join(" ");

    enJeu = true;
    document.querySelector(".inputLetter").value = "";
    console.log("Game start !");
    tabComplet = new Array(longueur).fill("_");
    lettreDejaPropose = [];
    document.querySelector(".inputLetter").value = "";
    afficherLettrePropose.textContent = " ";
    errorCount = 0;
    afficherError.innerText = errorCount;
  }
}
function verification() {
  if (enJeu == true) {
    propositionLettre = document
      .querySelector(".inputLetter")
      .value.toUpperCase();
    for (i = 0; i < tabADeviner.length; i++) {
      if (tabADeviner[i] == propositionLettre) {
        tabComplet[i] = propositionLettre;
        errorVerify = true;
        afficherMotDeviner.textContent = tabComplet.join(" ");
      }
    }
    for (i = 0; i < lettreDejaPropose.length; i++) {
      if (lettreDejaPropose[i] == propositionLettre) {
        dejaPropose = true;
      }
    }
    if (dejaPropose == false) {
      lettreDejaPropose.push(propositionLettre);
    }
    fauxPerdu();
    conditionVictoire();
    errorVerify = false;
    dejaPropose = false;
    document.querySelector(".inputLetter").value = "";
    afficherLettrePropose.textContent = lettreDejaPropose.join(" ");
    afficherError.innerText = errorCount;
  }
}
function fauxPerdu() {
  if (errorVerify == false || dejaPropose == true) {
    errorCount += 1;
  }
  if (errorCount >= 10) {
    alert("Vous avez perdu !");
    enJeu = false;
  }
  maVie();
}
function conditionVictoire() {
  if (tabADeviner.toString() == tabComplet.toString()) {
    alert("Vous avez gagné !");
    enJeu = false;
  }
}
function maVie() {
    console.log(errorCount);
    switch (errorCount){
        case 0:
            barreDeVie.style.width = "100%";
            break;
        case 1:
            barreDeVie.style.width = "90%";
            break;
        case 2:
            barreDeVie.style.width = "80%";
            break;
        case 3:
            barreDeVie.style.width = "70%";
            break;
        case 4:
            barreDeVie.style.width = "60%";
            break;
        case 5:
            barreDeVie.style.width = "50%";
            barreDeVie.style.backgroundColor = "Yellow";
            break;
        case 6:
            barreDeVie.style.width = "40%";
            break;
        case 7:
            barreDeVie.style.width = "30%";
            break;
        case 8:
            barreDeVie.style.width = "20%";
            barreDeVie.style.backgroundColor = "Red";
            break;
        case 9:
            barreDeVie.style.width = "10%";
            break;
        case 10:
            barreDeVie.style.width = "0%";
            break;
    }
}