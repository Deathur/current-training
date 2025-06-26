const passwordOutput = document.querySelector('#password-output')
const lengthPassword = document.querySelector('#password-length');
const password = document.querySelector('#display-password-length');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generate = document.querySelector('#generateButton');

let numberPassword = lengthPassword.value;
let randomPassword;
const listLowercase = "abcdefghijklmnopqrstuvwxyz"
const listUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const listNumbers = "0123456789";
const listSymbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

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
})

generate.addEventListener('click', ()=>{
    console.clear();
    if (lowercase.checked) {
        setupPassword = [...setupPassword, ...arrayLowercase];
    }
    if (uppercase.checked) {
        setupPassword = [...setupPassword, ...arrayUppercase];
    }
    if (numbers.checked) {
        setupPassword = [...setupPassword, ...arrayNumber];
    }
    if (symbols.checked) {
        setupPassword = [...setupPassword, ...arraySymbols];
    }
    console.log(setupPassword);
    
    for (i = 0; i < numberPassword; i++) {
        index = Math.floor(Math.random() * (setupPassword.length))
        arrayPassword.push(setupPassword[index])
    }
    console.log(arrayPassword);
    randomPassword = arrayPassword.join('');
    console.log(randomPassword);
    if (randomPassword !== ''){
        passwordOutput.value = randomPassword;
    }
    setupPassword = [];
    arrayPassword = [];
})