let cercle = document.querySelector('.rectangle');
console.log(cercle);

document.addEventListener('mousemove', (event) => {
    cercle.style.position = "absolute";
    positionY = event.clientY - 50;
    positionX = event.clientX - 50;
    cercle.style.top = positionY + "px";
    cercle.style.left = positionX + "px";
})
//NE PAS OUBLIER: RAJOUTER PX LORS D'UNE POSITION