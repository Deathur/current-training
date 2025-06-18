
let regmotADeviner = /^[a-z]+$/i;
let regpropositionLettre = /^[^a-zA-Z]+$/;
let regWhiteSpace = /^s+$/;

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
let pourcentageVie = document.querySelector(".pourcentagevie");
let boutonPopup = document.querySelector(".boutonpopup");
let popup = document.querySelector(".popup");
let textPopup = document.querySelector(".textpopup");
let inputLetter = document.querySelector(".inputLetter");
let barreDeVie = document.querySelector(".border2");
let modeDifficile = document.querySelector(".modedifficile");
let divPropose = document.querySelector(".div-propose");
let infoMode = document.querySelector(".infoMode");

modeDifficile.addEventListener("click", () => {
  if (modeDifficile.innerText == "Passer en mode difficile") {
    divPropose.style.display = "none";
    modeDifficile.innerText = "Passer en mode facile";
  } else {
    divPropose.style.display = "block";
    modeDifficile.innerText = "Passer en mode difficile";
  }
});
function commencerJeu() {
  if (enJeu == false) {
    pourcentageVie.innerText = "100%";
    motADeviner = prompt("Choisissez un mot à deviner").toUpperCase();
    if (
      motADeviner == null ||
      !regmotADeviner.test(motADeviner) ||
      regWhiteSpace.test(motADeviner)
    ) {
      alert("Veuillez écrire un mot contenant les lettres de A à Z !");
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
    boutonCommencer.style.visibility = "hidden";
    inputLetter.disabled = false;
    inputLetter.focus();
    modeDifficile.style.visibility = "hidden";
    infoMode.style.visibility = "hidden";
    return;
  }
}

function verification() {
  if (enJeu == true) {
    propositionLettre = document
      .querySelector(".inputLetter")
      .value.toUpperCase();
    if (regpropositionLettre.test(propositionLettre)) {
      inputLetter.value = "";
      alert("Veuillez entrer une lettre entre A et Z !");
      return;
    }
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
    return;
  }
}
function fauxPerdu() {
  if (errorVerify == false || dejaPropose == true) {
    errorCount += 1;
  }
  maVie();
  if (errorCount >= 10) {
    textPopup.innerText = `Vous avez perdu ! Le mot à retrouver était ${motADeviner}`;
    popup.style.display = "block";
    boutonCommencer.innerText = "Recommencer à jouer";
    boutonCommencer.style.visibility = "visible";
    modeDifficile.style.visibility = "visible";
    infoMode.style.visibility = "visible";
    enJeu = false;
    inputLetter.disabled = true;
  }
}
function conditionVictoire() {
  if (tabADeviner.toString() == tabComplet.toString()) {
    textPopup.innerText = "Vous avez gagné !";
    popup.style.display = "block";
    enJeu = false;
    inputLetter.disabled = true;
    boutonCommencer.innerText = "Recommencer à jouer";
    boutonCommencer.style.visibility = "visible";
    modeDifficile.style.visibility = "visible";
    infoMode.style.visibility = "visible";
  }
}
function maVie() {
  console.log(errorCount);
  switch (errorCount) {
    case 0:
      barreDeVie.style.width = "100%";
      pourcentageVie.innerText = "100%";
      break;
    case 1:
      barreDeVie.style.width = "90%";
      pourcentageVie.innerText = "90%";
      break;
    case 2:
      barreDeVie.style.width = "80%";
      pourcentageVie.innerText = "80%";
      break;
    case 3:
      barreDeVie.style.width = "70%";
      pourcentageVie.innerText = "70%";
      break;
    case 4:
      barreDeVie.style.width = "60%";
      pourcentageVie.innerText = "60%";
      break;
    case 5:
      barreDeVie.style.width = "50%";
      pourcentageVie.innerText = "50%";
      barreDeVie.style.backgroundColor = "Yellow";
      break;
    case 6:
      barreDeVie.style.width = "40%";
      pourcentageVie.innerText = "40%";
      break;
    case 7:
      barreDeVie.style.width = "30%";
      pourcentageVie.innerText = "30%";
      break;
    case 8:
      barreDeVie.style.width = "20%";
      pourcentageVie.innerText = "20%";
      barreDeVie.style.backgroundColor = "Red";
      break;
    case 9:
      barreDeVie.style.width = "10%";
      pourcentageVie.innerText = "10%";
      break;
    case 10:
      barreDeVie.style.width = "0%";
      pourcentageVie.innerText = "0%";
      break;
  }
}

boutonPopup.addEventListener("click", () => {
  popup.style.display = "none";
});

document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    popup.style.display = "none";
    verification();
  }
});
boutonCommencer.addEventListener("click", commencerJeu);
