//Exercice 1
let years = 18;
let majority;
function majorité(age) {
  if (age >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}
console.log(majorité(years));
//Exercice 2
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("Test");
//Exercice 3
let victory;
let thinking = Math.floor(Math.random() * 100) + 1;
let input;

function devin() {
  victory = false;
  while (victory == false) {
    console.log("Entrez un nombre:");
    input = prompt();
    if (input > thinking) {
      console.log("C'est plus petit");
    }
    if (input < thinking) {
      console.log("C'est plus grand !");
    }
    if (input == thinking) {
      console.log("FELICITATION !");
      victory = true;
    }
    if (input == "") {
      break;
    }
  }
}
//Exercice 4
function date() {
  let input2 = parseInt(prompt("Mettez le mois en chiffre (entre 1 et 12)"));
  switch (input2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      let years = parseInt(prompt("Veuillez donner l'année de ce mois"));
      if ((years % 4 === 0 && years % 100 > 0) || years % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    default:
      console.log("Insérez une valeur entre 1 et 12");
      break;
  }
}

let carre = document.getElementById("carre");
carre.addEventListener("click", () => {
  let color = Math.floor(Math.random() * 5) + 1;
  switch (color) {
    case 1:
      carre.style.backgroundColor = "red";
      break;
    case 2:
      carre.style.backgroundColor = "green";
      break;
    case 3:
      carre.style.backgroundColor = "blue";
      break;
    case 4:
      carre.style.backgroundColor = "black";
      break;
    case 5:
      carre.style.backgroundColor = "yellow";
      break;
  }
});