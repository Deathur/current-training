let valeur;

const grille = document.querySelector('.main-grid');
fetch (`https://rickandmortyapi.com/api/character`)
            .then ((response)=>response.json())
            .then((value)=>{
                for (let p = 1; p <= value.info.pages; p++) {
                fetch (`https://rickandmortyapi.com/api/character?page=${p}`)
                    .then ((response)=>response.json())
                    .then((value)=>{affichageDonnees(value);});
                }
            });

function affichageDonnees(valeur) {
    for (i = 0; i < valeur.results.length ; i++) {
        const div = document.createElement('div');
        let img = document.createElement('img');
        let name = valeur.results[i].name;
        img.src = valeur.results[i].image;
        div.appendChild(document.createTextNode(name));
        div.appendChild(img);
        grille.appendChild(div);
    }
}