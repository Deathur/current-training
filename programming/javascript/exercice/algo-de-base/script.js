// Exercice 1
let age = 28;
const majeur = 18;

console.log(age >= majeur);
// Exercice 2
let first = 5;
let second = 3;

console.log(first + second);
////
let third = 10;
let fourth = 7;

console.log(third - fourth);
////
let fifth = 4;
let sixth = 6;

console.log(fifth * sixth);
// Exercice 3
let prenom = "Matthieu";
let nom = "Baelen";
let nomComplet = `${nom} ${prenom}`;

console.log(nomComplet);
////
let sujet = "Le chat";
let verbe = "mange";
let objet = "la souris";
let phrase = `${sujet} ${verbe} ${objet}`;

console.log(phrase);
// Exercice 4
function saluer(prenom) {
    return `Bonjour ${prenom}`;
}
console.log(saluer("Alice"));
////
function multiplication(premier, second){
    return premier * second;
}
console.log(multiplication(7, 8));
// Exercice 5
let tableau = [1,2,3,4,5];

console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);
console.log(tableau[3]);
console.log(tableau[4]);
////
let tableau2 = [];
tableau2.push("10", "20", "30");
tableau2.shift();

console.table(tableau2);
// Exercice 6
let personne ={nom: `Alice`, age: 25, ville: `Paris`};
console.log(personne)
////
let personne2 ={titulaire: `John Doe`, solde: 1000};
personne2.solde += 500;
console.log(personne2);