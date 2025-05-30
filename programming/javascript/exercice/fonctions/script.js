//Exercice 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somme = 0;

function sumOfEvenNumbers(nombre) {
    for (i=0; i < nombre.length; i++) {
        if (nombre[i]%2 == 0) {
            somme+=nombre[i];
        }
    }
    return somme;
}

console.log(sumOfEvenNumbers(numbers));
//Exercice 2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

function mergeArrays(tableau1, tableau2) {
    //let tableaufinal = tableau1.concat(tableau2);
    let tableaufinal = [...tableau1, ...tableau2];
    return tableaufinal;
}
// Exercice 3
const fruits = ['Apple', 'Banana', 'Apple', 'Orange', 'Banana', 'Apple'];
console.log(removeDuplicates(fruits));

function removeDuplicates(tableau) {
    let tableaufinal = [...new Set(tableau)];
    return tableaufinal;
}
// Exercice 4
const numbers2 = [1, 2, 3, 4, 5];
console.log(containsElement(numbers2, 3)); // Résultat attendu : true
console.log(containsElement(numbers2, 6)); // Résultat attendu : false

function containsElement(tableau, valeur) {
    for (i = 0 ; i < tableau.length ; i++) {
        if (tableau[i] == valeur) {
            return true;
        }
    }
    return false;
}
//Exercice 5
const numbers3 = [1, 2, 2, 3, 4, 2, 5, 2];
console.log(countOccurrences(numbers3, 2)); // Résultat attendu : 4

function countOccurrences(tableau, valeur) {
    let iteration = 0;
    for (i = 0; i < tableau.length; i++) {
        if (tableau[i] == valeur) {
            iteration += 1;
        }
    }
    return iteration;
}