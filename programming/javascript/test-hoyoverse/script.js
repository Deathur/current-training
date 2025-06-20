let grille = document.querySelector('.main-grid')
fetch("https://vizualabstract.github.io/StarRailStaticAPI/db/fr/characters.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (i = 0; i <= 9999; i++) {
      if (data[i] !== undefined) {
        const div = document.createElement("div");
        let img = document.createElement("img");
        let name = data[i].name;
        img.src = `https://vizualabstract.github.io/StarRailStaticAPI/assets/image/character_preview/${data[i].id}.png`;
        div.appendChild(document.createTextNode(name));
        div.appendChild(img);
        grille.appendChild(div);
      }
    }
  });
