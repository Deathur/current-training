window.onload = reset();
let boutonRed = document.querySelector('.button1');
boutonRed.addEventListener('click', () => {
    red();
})

let boutonWhite = document.querySelector('.button2');
boutonWhite.addEventListener('click', () => {
    white();
})

let boutonBlack = document.querySelector('.button3');
boutonBlack.addEventListener('click', () => {
    black();
})

let boutonYellow = document.querySelector('.button4');
boutonYellow.addEventListener('click', () => {
    yellow();
})

let boutonReset = document.querySelector('.button0');
boutonReset.addEventListener('click', () => {
    reset();
})

function reset() {
    let colorchange = document.body;
    document.body.style.backgroundColor = 'grey';
    colorchange.style.color = 'black';
    document.getElementById("reset").style.display = "block";
    document.getElementById("red").style.display = "none";
    document.getElementById("white").style.display = "none";
    document.getElementById("black").style.display = "none";
    document.getElementById("yellow").style.display = "none";
}
function red() {
    let colorchange = document.body;
    document.body.style.backgroundColor = 'red';
    colorchange.style.color = 'black';
    document.getElementById("reset").style.display = "none";
    document.getElementById("red").style.display = "block";
    document.getElementById("white").style.display = "none";
    document.getElementById("black").style.display = "none";
    document.getElementById("yellow").style.display = "none";
}
function white() {
    let colorchange = document.body;
    document.body.style.backgroundColor = 'white';
    colorchange.style.color = 'black';
    document.getElementById("reset").style.display = "none";
    document.getElementById("red").style.display = "none";
    document.getElementById("white").style.display = "block";
    document.getElementById("black").style.display = "none";
    document.getElementById("yellow").style.display = "none";
}
function black() {
    let colorchange = document.body;
    colorchange.style.backgroundColor = 'black';
    colorchange.style.color = 'white';
    document.getElementById("reset").style.display = "none";
    document.getElementById("red").style.display = "none";
    document.getElementById("white").style.display = "none";
    document.getElementById("black").style.display = "block";
    document.getElementById("yellow").style.display = "none";
}
function yellow() {
    let colorchange = document.body;
    document.body.style.backgroundColor = 'yellow';
    colorchange.style.color = 'black';
    document.getElementById("reset").style.display = "none";
    document.getElementById("red").style.display = "none";
    document.getElementById("white").style.display = "none";
    document.getElementById("black").style.display = "none";
    document.getElementById("yellow").style.display = "block";
}