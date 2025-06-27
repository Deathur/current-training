let iteration = 0;

const passwordOutput = document.querySelector('#password-output');
const lengthPassword = document.querySelector('#password-length');
const password = document.querySelector('#display-password-length');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generate = document.querySelector('#generateButton');

let numberPassword = lengthPassword.value;
let randomPassword;
let countRegex = 0;
let regexPassword = 0;
let verifyRegex = false;
const listLowercase = "abcdefghijklmnopqrstuvwxyz";
const regexLowercase = /(?=.*[a-z])/
const listUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const regexUppercase = /(?=.*[a-z])/
const listNumbers = "0123456789";
const regexNumbers = /(?=.*\d)/
const listSymbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const regexSymbols = /(?=.*[@$!%*?&])/

let arrayLowercase = listLowercase.split('');
let arrayUppercase = listUppercase.split('');
let arrayNumber = listNumbers.split('');
let arraySymbols = listSymbols.split('');

let setupPassword = [];
let arrayPassword = [];
let index;

lengthPassword.addEventListener('input', () => {
    numberPassword = lengthPassword.value;
    password.value = numberPassword;
});

generate.addEventListener('click', ()=>{
    while(verifyRegex == false){
        console.clear();
        if (lowercase.checked) {
            setupPassword = [...setupPassword, ...arrayLowercase];
            countRegex++;
        }
        if (uppercase.checked) {
            setupPassword = [...setupPassword, ...arrayUppercase];
            countRegex++;
        }
        if (numbers.checked) {
            setupPassword = [...setupPassword, ...arrayNumber];
            countRegex++;
        }
        if (symbols.checked) {
            setupPassword = [...setupPassword, ...arraySymbols];
            countRegex++;
        }
        for (i = 0; i < numberPassword; i++) {
            index = Math.floor(Math.random() * (setupPassword.length));
            arrayPassword.push(setupPassword[index]);
        }
        randomPassword = arrayPassword.join('');
        if (regexLowercase.test(randomPassword)){
            regexPassword++;
        }
        if (regexUppercase.test(randomPassword)){
            regexPassword++;        
        }
        if (regexNumbers.test(randomPassword)) {
            regexPassword++;        
        }
        if (regexSymbols.test(randomPassword)) {
            regexPassword++;
        }
        
        if (randomPassword !== ''){
            if (regexPassword >= countRegex){
                passwordOutput.value = randomPassword;
                verifyRegex = true;
            }
        }
        else {
            alert('Veuillez choisir le ou les options pour le mot de passe !');
        }
        setupPassword = [];
        arrayPassword = [];
        countRegex = 0;
        regexPassword = 0;
        iteration++;
    }
    console.log(`Nombre d'itération de mot de passe avant le bon : ${iteration}`);
    iteration=0;
    verifyRegex = false;
});