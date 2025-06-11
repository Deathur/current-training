let cercle = document.querySelector('.rectangle');
console.log(cercle);

document.addEventListener('mousemove', (event) => {
    /*
    positionY = event.clientY - (cercle.clientHeight / 2);
    positionX = event.clientX - (cercle.clientWidth / 2);
    cercle.style.top = positionY + "px";
    cercle.style.left = positionX + "px";
    //NE PAS OUBLIER: RAJOUTER PX LORS D'UNE POSITION
    */
   cercle.style.transform = `translate(${event.clientX - (cercle.clientWidth / 2)}px,${event.clientY - (cercle.clientHeight / 2)}px)`;
})
document.addEventListener('click', (event) => {
    
    let taille = Math.floor(Math.random() * 100) + 100;
    cercle.style.height = taille + "px";
    cercle.style.width = taille + "px";
})