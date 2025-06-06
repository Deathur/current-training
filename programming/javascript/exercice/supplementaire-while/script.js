function exo1() {
    let number = 1;
    while (number <= 10) {
        console.log(number);
        number ++;
    }
}
function exo2() {
    let number = 1;
    let sumNumber = 0;
    while (number <= 100) {
        sumNumber += number;
        number ++;
    }
    console.log(sumNumber);
}
function exo3() {
    let finish = false;
    let nombreADeviner = Math.floor(Math.random() * 10) + 1;
    let nombre = parseInt(prompt("Choisissez un nombre entre 1 et 10"))
    console.log(nombreADeviner);
    while (finish == false) {
        if (nombre < nombreADeviner) {
            console.log('Plus grand');
            nombre = parseInt(prompt("Choisissez un nombre entre 1 et 10"))
        }
        if (nombre > nombreADeviner) {
            console.log('Plus petit');
            nombre = parseInt(prompt("Choisissez un nombre entre 1 et 10"))
        }
        if (nombre == nombreADeviner) {
            console.log("C'est gagné !");
            finish = true;
        }
    }
}

function exo4() {
    let finish = false;
    let promptText = prompt("Veuillez écrire 'oui' ou 'non' pour arrêter la boucle");
    while (finish == false) {
        if (promptText == 'oui' || promptText == 'non') {
            finish = true;
        }
        else {
            promptText = prompt("Veuillez écrire 'oui' ou 'non' pour arrêter la boucle");
        }
    }
}
function exo5() {
    let finish = false;
    let number = parseInt(prompt("Entre un nombre !"));
    while (finish == false) {
        if (number%2 == 0) {
            console.log(number);
        }
        number --;
        if (number == 0) {
            console.log(number);
            finish = true;
        }
    }

}